interface User {
  name: string;
  email: string;
  isActive: boolean;
  role: string;
}

interface UserFormProps {
  addUser: (user: User) => void;
}