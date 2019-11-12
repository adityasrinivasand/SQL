using System;
using System.Collections.Generic;

namespace CRUD
{
    class Menu
    {
        public void Show()
        {
            int userOption;
            string Getoption;
            bool Confirmresult = false;
            List<Order> Ordername = new List<Order>();
            DateTime now = DateTime.Now;
            string formatted = now.ToString("dd/M/yyyy");
            Food foodMenu = new Food();
            do
            {
                Console.WriteLine("\t\t\t Welcome To Tasty Lunch Box");
                Console.WriteLine();
                Console.WriteLine("\t\tMenu");
                Console.WriteLine();
                Console.WriteLine($"For {formatted}, there is discount of 30% on all food products !");
                Console.WriteLine();
                Console.WriteLine("1. Saravana Bhavan ");
                Console.WriteLine("2. Bistro ");
                Console.WriteLine("3. IBACO ");
                Console.WriteLine("4. Exit ");
                Console.WriteLine("");

                Console.WriteLine("Enter your option");

                Getoption = Console.ReadLine();
                while (!int.TryParse(Getoption, out userOption))
                {
                    Console.WriteLine("This is not a number!");
                    Getoption = Console.ReadLine();
                }

                if ((userOption > 0) && (userOption < 5))
                {
                    Confirmresult = false;
                    switch (userOption)
                    {
                        case 1:
                            Console.Clear();
                            foodMenu.South(Ordername);
                            break;

                        case 2:
                            Console.Clear();
                            foodMenu.Italian(Ordername);
                            break;

                        case 3:
                            Console.Clear();
                            foodMenu.Deserts(Ordername);
                            break;

                        case 4:
                            Environment.Exit(0);
                            break;

                        default:
                            Console.WriteLine("No match found");
                            break;
                    }
                }
                else
                {
                    Confirmresult = true;
                    Console.Clear();
                    Console.WriteLine("Re-enter the options");
                }
            } while (Confirmresult == true);
            
        }
        
    }
   
}
