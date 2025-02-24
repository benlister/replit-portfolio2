import Hero from "@/components/sections/hero";
import CaseStudy from "@/components/sections/case-study";
import Metadata from "@/components/sections/metadata";
import ImageGrid from "@/components/ui/image-grid";
import MetricsGrid from "@/components/sections/metrics-grid";

export default function Home() {
  const portfolioImages = [
    {
      url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      caption: "Project Strategy & Planning"
    },
    {
      url: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      caption: "Design System Development"
    },
    {
      url: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2",
      caption: "Visual Design Exploration"
    }
  ];

  const metrics = [
    {
      value: "40%",
      label: "Reduction in Design Iteration Time"
    },
    {
      value: "65%",
      label: "Improvement in Design Consistency"
    },
    {
      value: "3x",
      label: "Increase in Team Collaboration"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero
        title="Redesigning the Creative Process"
        description="A comprehensive case study on revolutionizing design workflows and collaboration"
        backgroundUrl="https://images.unsplash.com/photo-1455849318743-b2233052fcff"
      />

      <div className="container-wide py-16">
        <div className="grid md:grid-cols-[300px,1fr] gap-12">
          <Metadata
            date="2023 - 2024"
            role="Staff Product Designer"
            activities={["Strategy", "Code", "Visual Design", "Content"]}
          />

          <div className="space-y-16">
            <CaseStudy
              title="Context"
              content="As organizations scale their design operations, maintaining consistency and efficiency becomes increasingly challenging. This case study explores how we tackled these challenges through innovative tooling and processes."
            />

            <section>
              <h2 className="mb-8">Projects</h2>

              <div className="full-width-image aspect-[21/9] overflow-hidden mb-12">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                  alt="Design System Overview"
                  className="w-full h-full object-cover"
                />
                <p className="image-caption text-center mt-4">
                  Complete overview of the design system components and documentation
                </p>
              </div>

              <div className="prose mt-8">
                <p>
                  Our approach focused on creating scalable design systems and workflows that could adapt to the organization's growing needs while maintaining design quality and consistency.
                </p>
              </div>

              <ImageGrid images={portfolioImages} className="mt-12" />

              <div className="full-width-image aspect-video overflow-hidden mt-12">
                <img
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover"
                />
                <p className="image-caption text-center mt-4">
                  Cross-functional team workshops and collaborative design sessions
                </p>
              </div>
            </section>

            <CaseStudy
              title="Challenges"
              content="The primary challenge was balancing the need for creative freedom with the requirements for consistency and scalability. We encountered several key obstacles:"
            />
            <div className="prose">
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining design consistency across multiple teams and products</li>
                <li>Scaling design operations without compromising quality</li>
                <li>Integrating new tools and processes without disrupting existing workflows</li>
                <li>Training and onboarding team members efficiently</li>
              </ul>
            </div>

            <section>
              <h2 className="mb-6">Outcomes</h2>
              <MetricsGrid metrics={metrics} />
              <div className="prose">
                <p>
                  The implementation of our new design system and workflow tools resulted in significant improvements across all key metrics. Beyond the numbers, we observed:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Enhanced team collaboration and communication</li>
                  <li>Streamlined design review and approval processes</li>
                  <li>Improved documentation and knowledge sharing</li>
                  <li>Greater design system adoption across teams</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}