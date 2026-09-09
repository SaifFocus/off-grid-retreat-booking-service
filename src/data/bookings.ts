export interface Booking {
  id: string;
  locationId: string;
  guestName: string;
  email: string;
  phone: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: Date;
}

// Mock bookings data for demonstration
export const mockBookings: Booking[] = [
  {
    id: "BK001",
    locationId: "varmland-pine",
    guestName: "Elin Svensson",
    email: "elin.svensson@email.com",
    phone: "+46 70 123 4567",
    checkIn: new Date("2026-06-20"),
    checkOut: new Date("2026-06-25"),
    guests: 2,
    status: "confirmed",
    createdAt: new Date("2026-05-10"),
  },
  {
    id: "BK002",
    locationId: "lofoten-fjord",
    guestName: "Lars Johansen",
    email: "lars.johansen@email.com",
    phone: "+47 912 34 567",
    checkIn: new Date("2026-07-22"),
    checkOut: new Date("2026-07-24"),
    guests: 4,
    status: "pending",
    createdAt: new Date("2026-06-12"),
  },
  {
    id: "BK003",
    locationId: "bornholm-coast",
    guestName: "Maja Pedersen",
    email: "maja.pedersen@email.com",
    phone: "+45 20 12 34 56",
    checkIn: new Date("2026-07-18"),
    checkOut: new Date("2026-07-21"),
    guests: 3,
    status: "confirmed",
    createdAt: new Date("2026-05-08"),
  },
  {
    id: "BK004",
    locationId: "saimaa-lake",
    guestName: "Aino Korhonen",
    email: "a.korhonen@email.com",
    phone: "+358 40 123 4567",
    checkIn: new Date("2026-08-25"),
    checkOut: new Date("2026-08-28"),
    guests: 2,
    status: "confirmed",
    createdAt: new Date("2026-06-14"),
  },
  {
    id: "BK005",
    locationId: "telemark-river",
    guestName: "Magnus Gulbrandsen",
    email: "m.gulbrandsen@email.com",
    phone: "+47 934 56 789",
    checkIn: new Date("2026-08-01"),
    checkOut: new Date("2026-08-05"),
    guests: 5,
    status: "pending",
    createdAt: new Date("2026-06-13"),
  },
  {
    id: "BK006",
    locationId: "lapland-aurora",
    guestName: "Nora Eriksson",
    email: "nora.eriksson@email.com",
    phone: "+46 73 987 6543",
    checkIn: new Date("2026-02-10"),
    checkOut: new Date("2026-02-14"),
    guests: 2,
    status: "confirmed",
    createdAt: new Date("2026-01-15"),
  },
  {
    id: "BK007",
    locationId: "varmland-pine",
    guestName: "Oskar Bergström",
    email: "o.bergstrom@email.com",
    phone: "+46 70 765 4321",
    checkIn: new Date("2026-08-28"),
    checkOut: new Date("2026-08-30"),
    guests: 4,
    status: "cancelled",
    createdAt: new Date("2026-05-05"),
  },
  {
    id: "BK008",
    locationId: "lofoten-fjord",
    guestName: "Ingrid Holm",
    email: "ingrid.holm@email.com",
    phone: "+47 923 45 678",
    checkIn: new Date("2026-08-15"),
    checkOut: new Date("2026-08-20"),
    guests: 3,
    status: "confirmed",
    createdAt: new Date("2026-06-14"),
  },
  {
    id: "BK009",
    locationId: "bornholm-coast",
    guestName: "William Rasmussen",
    email: "w.rasmussen@email.com",
    phone: "+45 30 45 67 89",
    checkIn: new Date("2026-07-30"),
    checkOut: new Date("2026-08-02"),
    guests: 2,
    status: "pending",
    createdAt: new Date("2026-06-12"),
  },
  {
    id: "BK010",
    locationId: "saimaa-lake",
    guestName: "Juhani Mäkinen",
    email: "j.makinen@email.com",
    phone: "+358 50 234 5678",
    checkIn: new Date("2026-09-05"),
    checkOut: new Date("2026-09-08"),
    guests: 4,
    status: "confirmed",
    createdAt: new Date("2026-06-11"),
  },
  {
    id: "BK011",
    locationId: "telemark-river",
    guestName: "Ingeborg Torgersen",
    email: "i.torgersen@email.com",
    phone: "+47 945 67 890",
    checkIn: new Date("2026-07-12"),
    checkOut: new Date("2026-07-16"),
    guests: 6,
    status: "confirmed",
    createdAt: new Date("2026-06-10"),
  },
  {
    id: "BK012",
    locationId: "lapland-aurora",
    guestName: "Erik Westerlund",
    email: "e.westerlund@email.com",
    phone: "+46 72 345 6789",
    checkIn: new Date("2026-03-20"),
    checkOut: new Date("2026-03-24"),
    guests: 2,
    status: "pending",
    createdAt: new Date("2026-02-13"),
  },
];

export const getBookingsByLocation = (locationId: string) => 
  mockBookings.filter(booking => booking.locationId === locationId);

export const getUpcomingBookings = () => {
  const today = new Date();
  return mockBookings.filter(booking => 
    booking.checkIn >= today && booking.status !== 'cancelled'
  );
};

export const getBookingStats = () => {
  const today = new Date();
  const confirmed = mockBookings.filter(b => b.status === "confirmed").length;
  const pending = mockBookings.filter(b => b.status === "pending").length;
  const upcoming = mockBookings.filter(b => b.checkIn >= today && b.status !== 'cancelled').length;
  
  return { total: mockBookings.length, confirmed, pending, upcoming };
};
