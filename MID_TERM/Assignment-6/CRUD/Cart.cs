using System;
using System.Collections.Generic;

namespace CRUD
{
    class Cart
    {
        public static void Confirm(List<Order> Ordername)
        {
            Bill.PrintBill(Ordername);               // Calling the print bill function
            PreviousOrder.Addorders(Ordername);
            Console.WriteLine("\n Your bill is being processed. Please wait! ");
            Console.WriteLine("\n Press Enter to exit");
            Console.ReadLine();
            Environment.Exit(0);
        }
        public static void Update(List<Order> Ordername)
        {
            bool Confirmresult = true;
            int UpdateOption = 0;
            String Getupdateoption;
            int UpdateQuantity = 0;
            bool result = true;
            Order or = new Order();

            Console.WriteLine("Which Item you want to update");
            do
            {
                Getupdateoption = Console.ReadLine();
                while (!int.TryParse(Getupdateoption, out UpdateOption))
                {
                    Console.WriteLine("This is not a number!");
                    Getupdateoption = Console.ReadLine();
                }
                foreach (Order i in Ordername)
                {
                    if (UpdateOption == i.SNo)
                    {
                        Confirmresult = false;
                        Console.WriteLine("Enter the Quantity you want to change");  //Getting the update quantity 
                        do
                        {
                            while (!int.TryParse(Console.ReadLine(), out UpdateQuantity))
                            {
                                Console.WriteLine("This is not a number!");
                            }
                            if ((i.Quantity > 0) && (UpdateQuantity<15))
                            {
                                result = false;
                            }
                            else
                            {
                                result = true;
                                Console.WriteLine("Enter a proper quantity less than 15 and greater than 0 ");
                            }
                        } while (result == true);          // Checking its a proper number
                        i.Quantity = UpdateQuantity;
                    }    
                }
                if(Confirmresult == true)
                {
                    Console.WriteLine("Item doesnt Exist");
                    Console.WriteLine("Which Item you want to update");
                    Confirmresult = true;
                }
            } while (Confirmresult == true);
            Console.WriteLine("Updated cart");
            or.Display(Ordername);
        }
        public static void Delete(List<Order> Ordername)
        {
            bool Confirmresult = true;
            int UpdateOption = 0;
            String Getupdateoption;
            Order or = new Order();

            Console.WriteLine("Which Item you want to Delete");
            do
            {
                Getupdateoption = Console.ReadLine();
                while (!int.TryParse(Getupdateoption, out UpdateOption))
                {
                    Console.WriteLine("This is not a number!");
                    Getupdateoption = Console.ReadLine();
                }
             
                 Confirmresult = false;
                 Ordername.RemoveAll(idel => idel.SNo == UpdateOption);

            } while (Confirmresult == true);
            Console.WriteLine("Updated cart");
            or.Display(Ordername);
        }
    }
}
