interface Teacher {
  name: string;
  subject: string;
  description: string;
}

export function TeacherCard({ name, subject, description }: Teacher) {
  return (
    <div className="border p-4 rounded-xl shadow-sm bg-white">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{subject}</p>
      <p className="text-xs mt-2 text-gray-500">{description}</p>
    </div>
  );
}