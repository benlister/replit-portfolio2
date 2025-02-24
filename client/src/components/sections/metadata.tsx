interface MetadataProps {
  date: string;
  role: string;
  activities: string[];
}

export default function Metadata({ date, role, activities }: MetadataProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-2">Timeline</h3>
        <p className="text-muted-foreground">{date}</p>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Role</h3>
        <p className="text-muted-foreground">{role}</p>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Activities</h3>
        <ul className="space-y-1">
          {activities.map((activity, index) => (
            <li key={index} className="text-muted-foreground">
              {activity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
