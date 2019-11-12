using System;
using System.Collections.Generic;

namespace CRUD
{
    class Program
    {
        static void Main(string[] args)
        {
            List<User> Usernames = new List<User>();                                             //List for users

            Usernames.Add(new User() { name = "User1", pass = "pass" });
            Usernames.Add(new User() { name = "User2", pass = "pass" });
            Usernames.Add(new User() { name = "User3", pass = "pass" });

            Console.WriteLine("\t\t\t Welcome To Tasty Lunch Box");
            Console.WriteLine();
            Login log = new Login();           //Calling Login
            Console.Clear();
            log.Form(Usernames);
        }
    }
}
