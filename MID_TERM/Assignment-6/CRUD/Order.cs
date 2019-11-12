using System;
using System.Collections.Generic;

namespace CRUD
{
    class Order
    {       
        public int SNo=1;
        public string ProductName;
        public int Quantity;
        public int Price;
        public int Total;

        public void GetOrder(List<Tuple<int, string, int>> menu, int userOption, List<Order> Ordername)
        {
            Order  order = new Order();
            bool confirmresult = true;
            foreach (Tuple<int, string, int> tuple in menu)             //loop inside the Tuple
            {
                if (tuple.Item1 == userOption)
                {
                    order.ProductName = tuple.Item2;
                    order.Price = tuple.Item3;
                }
            }         

            Console.WriteLine("Enter the Quantity");             //getting the quantity
            do
            {
                while (!int.TryParse(Console.ReadLine(), out order.Quantity))
                {
                    Console.WriteLine("This is not a number!");
                }
                if ((order.Quantity > 0) && (order.Quantity < 15))
                {
                    confirmresult = false;
                }else
                {
                    confirmresult = true;
                    Console.WriteLine("Enter a proper quantity less than 15 and greater than 0 ");
                }
            } while (confirmresult == true);
            
            order.Total = order.Price * order.Quantity;
            Ordername.Add(order);
        }

        public void Display(List<Order> Ordername)
        {        
            long TotalCost = 0;
            int Option = 0;
            string Getoption;
            bool Confirmresult = true;

            Console.Clear();
            Console.WriteLine("----------------------- Your Lunch Box ---------------------------------");    //Displaying the order
            Console.WriteLine($"{"SNo",13}" +"\t"+ $"{"ProductName",13}" + $"{"Price",13}" + $"{"Quantity",13}" + $"{"Total",13}");
            Console.WriteLine();

            SNo = 1;
            foreach (Order i in Ordername)
            {
                i.SNo = SNo;
                i.Total = i.Price * i.Quantity;
                Console.WriteLine($"{i.SNo,10} \t  {i.ProductName,10}{i.Price,10}{i.Quantity,10}{i.Total,10}");
                TotalCost += i.Total;
                SNo += 1;   
            } 

            Console.WriteLine("------------------------------------------------------------------------");
            Console.Write($"Total Cost is: {TotalCost}");
            Console.WriteLine();
            Console.WriteLine($"Total Amount with discount: {TotalCost * 0.7}");
            Console.WriteLine();
            Console.WriteLine("");

            Console.WriteLine("Which Operation you want to perform ");
            Console.WriteLine("1. Confirm");
            Console.WriteLine("2. Update");
            Console.WriteLine("3. Delete");
            Console.WriteLine("4. Continue Shopping");
            Console.WriteLine("Enter your Option");

            do
            {
                Getoption = Console.ReadLine();
                while (!int.TryParse(Getoption, out Option))
                {
                    Console.WriteLine("This is not a number!");
                    Getoption = Console.ReadLine(); 
                }
                if ((Option != 1) && (Option != 2) && (Option != 3) && (Option != 4))
                {
                    Console.WriteLine("Enter PROPER operation");
                    Confirmresult = true;
                }
                else Confirmresult = false;
                
            } while (Confirmresult == true);

            switch (Option)      //Switch case for chosing what to do
            {
                case 1:
                    Cart.Confirm(Ordername);
                    break;

                case 2:
                    Cart.Update(Ordername);
                    break;

                case 3:
                    Cart.Delete(Ordername);
                    break;

            }       
        }
    }
}
