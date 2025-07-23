import { saveTeacher, getTeachers } from "./firestore";
import { saveTeacherToSupabase, getTeachersFromSupabase } from "./supabase";

const provider = "firebase"; // altere para "supabase" se desejar

export const dataProvider = {
  saveTeacher: provider === "firebase" ? saveTeacher : saveTeacherToSupabase,
  getTeachers: provider === "firebase" ? getTeachers : getTeachersFromSupabase,
};