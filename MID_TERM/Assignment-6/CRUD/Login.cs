using System;
using System.Collections.Generic;

namespace CRUD
{
    class Login
    {
        public static string uname { get; set; }
        public string password { get; set; }
        public void Form(List<User> Usernames)
        {
            Console.WriteLine("\t\t\t Welcome To Tasty Lunch Box");
            Console.WriteLine();

            Console.WriteLine("Enter User Name");
            uname = Console.ReadLine();
            while (string.IsNullOrEmpty(uname))
            {
                Console.WriteLine("Name can't be empty! Input your Username once more");
                uname = Console.ReadLine();
            }

            Console.WriteLine();
            Console.WriteLine("Enter Password");
            password = Console.ReadLine();
            while (string.IsNullOrEmpty(password))
            {
                Console.WriteLine("Name can't be empty! Input your Password once more");
                password = Console.ReadLine();
            }

            Validate(Usernames);
        }

        public void Validate(List<User> Usernames)
        {
            Menu menu = new Menu();

            foreach (User u in Usernames)
            {
                if (uname == u.name && password == u.pass)
                {
                    Console.Clear();
                    menu.Show();
                }
                else
                {
                    Console.WriteLine("The UserName and Password is Wrong! Please try again");
                    Form(Usernames);
                }
            }                      
        }
    }
}
