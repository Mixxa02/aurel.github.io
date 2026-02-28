import Layout from "@/components/Layout";
import Newsletter from "@/components/Newsletter";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-grid max-w-4xl mx-auto text-center">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground mb-6">Our Story</p>
          <h1 className="headline-xl mb-8">
            Crafted
            <br />
            with Intention
          </h1>
          <p className="body-lg max-w-2xl mx-auto">
            Founded in 2020, AUREL was born from a desire to strip fashion back to its essence —
            beautiful materials, thoughtful design, and enduring style.
          </p>
        </div>
      </section>

      {/* Image + Text 1 */}
      <section className="section-padding pt-0">
        <div className="container-grid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden">
              <img src={about1} alt="Behind the scenes" className="w-full h-full object-cover" />
            </div>
            <div className="lg:py-12">
              <h2 className="headline-md mb-6">The Art of Restraint</h2>
              <p className="body-lg mb-6">
                Every AUREL piece begins with a question: what is truly necessary? We design by subtraction,
                removing everything superfluous until only the essential remains. The result is clothing that
                speaks softly but carries unmistakable presence.
              </p>
              <p className="body-lg">
                Our design studio in Copenhagen serves as both workshop and sanctuary — a place where
                creativity meets craftsmanship, and every stitch is placed with purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-card">
        <div className="container-grid">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="headline-lg mb-6">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16 max-w-4xl mx-auto">
            {[
              {
                title: "Quality",
                text: "We source the finest materials from ethical producers across Europe and Japan. Every fabric is chosen for its beauty, durability, and feel.",
              },
              {
                title: "Sustainability",
                text: "Small-batch production, zero-waste pattern cutting, and biodegradable packaging. We make only what is needed, nothing more.",
              },
              {
                title: "Timelessness",
                text: "Our collections are designed to transcend seasons. Every piece is meant to be worn, loved, and kept for years to come.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="headline-md mb-4">{value.title}</h3>
                <p className="body-sm">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Text 2 */}
      <section className="section-padding">
        <div className="container-grid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="lg:py-12 order-2 lg:order-1">
              <h2 className="headline-md mb-6">Materials Matter</h2>
              <p className="body-lg mb-6">
                We work exclusively with natural fibers — linen from Belgium, cashmere from Mongolia,
                wool from New Zealand, and silk from Como. Each material is selected not only for its
                quality but for its environmental impact.
              </p>
              <p className="body-lg">
                Our commitment to transparency means every garment comes with full traceability —
                from raw material to finished piece.
              </p>
            </div>
            <div className="aspect-[4/5] bg-secondary rounded-lg overflow-hidden order-1 lg:order-2">
              <img src={about2} alt="Fine fabrics" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
};

export default About;
