interface CaseStudyProps {
  title: string;
  content: string;
}

export default function CaseStudy({ title, content }: CaseStudyProps) {
  return (
    <section>
      <h2 className="mb-6">{title}</h2>
      <div className="prose">
        <p>{content}</p>
      </div>
    </section>
  );
}
