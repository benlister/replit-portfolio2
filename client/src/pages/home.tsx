import Hero from "@/components/sections/hero";
import CaseStudy from "@/components/sections/case-study";
import Metadata from "@/components/sections/metadata";
import ImageGrid from "@/components/ui/image-grid";

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

  const detailImages = [
    {
      url: "https://images.unsplash.com/photo-1520806004693-db86ec088635",
      caption: "User Interface Components"
    },
    {
      url: "https://images.unsplash.com/photo-1518683999933-22cd5c651d5e",
      caption: "Design Documentation"
    },
    {
      url: "https://images.unsplash.com/photo-1520321930038-85a3e4ceb446",
      caption: "Interactive Prototypes"
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
              <ImageGrid images={portfolioImages} />
              <div className="prose mt-8">
                <p>
                  Our approach focused on creating scalable design systems and workflows that could adapt to the organization's growing needs while maintaining design quality and consistency.
                </p>
              </div>
              <ImageGrid images={detailImages} className="mt-12" />
            </section>

            <CaseStudy
              title="Challenges"
              content="The primary challenge was balancing the need for creative freedom with the requirements for consistency and scalability. We needed to create systems that would empower designers while ensuring cohesive output across teams."
            />

            <CaseStudy
              title="Outcomes"
              content="The implementation of our new design system and workflow tools resulted in a 40% reduction in design iteration time and a significant improvement in cross-team collaboration. Design consistency scores improved by 65% across all product areas."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
