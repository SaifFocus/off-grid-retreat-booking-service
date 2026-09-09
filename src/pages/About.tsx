import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Heart, Compass, Mountain, Users, TreePine } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import bannerImage from "@/assets/spot-norway-fjord.jpg";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We tread lightly on the earth, ensuring our retreats enhance rather than harm the natural environment."
  },
  {
    icon: Heart,
    title: "Connection",
    description: "Fostering deep bonds between people and the natural world through meaningful wilderness experiences."
  },
  {
    icon: Compass,
    title: "Simplicity",
    description: "Stripping away modern complexity to rediscover the joy found in life's essential elements."
  },
  {
    icon: Mountain,
    title: "Authenticity",
    description: "Providing genuine wilderness experiences untouched by the artificial and manufactured."
  },
  {
    icon: Users,
    title: "Community",
    description: "Building connections between like-minded individuals who share a reverence for nature."
  },
  {
    icon: TreePine,
    title: "Mindfulness",
    description: "Encouraging presence and awareness through the calming influence of natural surroundings."
  }
];

const About = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      
      {/* Hero Image with Parallax */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <motion.img
          src={bannerImage}
          alt="Serene lake surrounded by nature"
          style={{ y }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <main>
        {/* Our Story Section */}
        <section className="py-24 lg:py-32 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">About Us</span>
              <h1 className="text-2xl md:text-3xl font-light tracking-tight mt-2 mb-8">Our Story</h1>
              
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>
                  Wild Haven began on the shores of a Swedish lake, where the midnight sun refused to set and the 
                  only notifications were bird calls and wind in the pines. We saw how Scandinavian nature — with 
                  its vast forests, silent lakes, and dramatic coastlines — had a way of slowing people down in a 
                  way nothing else could.
                </p>
                <p>
                  Founded in 2019, we set out to share that feeling. We searched Sweden, Norway, Denmark, and Finland 
                  for places where the landscape itself becomes the host: a Värmland forest, a Lofoten fjord, a 
                  Bornholm cliff, a Saimaa island, a Lapland aurora dome, a Telemark river bend.
                </p>
                <p>
                  Each retreat is designed around the Nordic idea of friluftsliv — open-air living. It's not about 
                  roughing it; it's about being comfortable enough to stay present. Our canvas lodges, geodesic domes, 
                  and lakeside saunas let guests experience Scandinavia's wild beauty without sacrificing warmth, 
                  safety, or soul.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Off-Grid Matters Section */}
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">The Why</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-2 mb-8">Why Off-Grid Retreats Matter</h2>
              
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                <p>
                  The average person now spends over seven hours a day looking at screens. Our nervous systems, 
                  evolved over millions of years in natural environments, are under constant assault from 
                  artificial stimuli. The result? Epidemic levels of anxiety, burnout, and a pervasive sense 
                  of disconnection.
                </p>
                <p>
                  Off-grid retreats offer something profound: the opportunity to reset. When we remove ourselves 
                  from the digital matrix, remarkable things happen. Stress hormones drop. Sleep improves. 
                  Creativity returns. We begin to hear our own thoughts again.
                </p>
                <p>
                  But it's not just about what we remove—it's about what we rediscover. The crackle of a fire. 
                  The weight of silence. The slow unfurling of time when it's no longer sliced into notifications 
                  and deadlines. These aren't luxuries; they're necessities that modern life has convinced us 
                  we can live without.
                </p>
                <p>
                  At Wild Haven, we believe that reconnecting with nature isn't an escape from reality—it's a 
                  return to it. And in that return, we find not just rest, but renewal.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 lg:py-32 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">What We Stand For</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-2">Our Values</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-border rounded-lg bg-card shadow-soft hover:shadow-md transition-shadow duration-300"
                >
                  <value.icon className="h-6 w-6 text-primary mb-4" />
                  <h3 className="text-lg font-light tracking-tight mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;