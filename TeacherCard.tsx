export function TeacherCard({ name, subjects, date, bio }: any) {
  return (
    <div className="border border-blue-200 p-4 rounded-lg bg-white shadow-sm">
      <p className="font-bold">{name}</p>
      <p className="text-sm text-gray-600">Matérias: {subjects}</p>
      <p className="text-sm text-gray-500">Disponível em: {date}</p>
      <p className="text-sm mt-2">{bio}</p>
    </div>
  );
}