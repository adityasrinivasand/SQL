using System;
using System.Collections.Generic;
using System.IO;

namespace CRUD
{
    class PreviousOrder
    {
        public static void Addorders(List<Order> Ordername)
        {
            int TotalCost = 0;
            var SNo = 1;
            DateTime now = DateTime.Now;
            StreamWriter sw = File.AppendText(@"Order.txt");

            sw.WriteLine();
            sw.WriteLine("\t\t\t Tasty Lunch Box ");
            sw.WriteLine();
            sw.Write($"Name             :- {Login.uname}");
            sw.WriteLine();
            sw.Write("Address          :-  XYZ, Adambakkam, Chennai-88");
            sw.WriteLine();
            sw.Write("Phone            :-  1234567890");
            sw.WriteLine();
            sw.Write($"Date and Time    :-  {now}");
            sw.WriteLine();
            sw.WriteLine();
            sw.Write("Bill No:- "); sw.WriteLine($"{"1",1}\n");
            sw.WriteLine();

            sw.WriteLine("----------------------- Your Lunch Box ---------------------------------");
            sw.WriteLine($"{"SNo",13}" + "\t" + $"{"ProductName",25}" + $"{"Price",13}" + $"{"Quantity",13}" + $"{"Total",13}");
            foreach (Order i in Ordername)
            {
                sw.WriteLine();
                i.SNo = SNo;
                sw.WriteLine($"{i.SNo,10} \t  {i.ProductName,25}{i.Price,10}{i.Quantity,10}{i.Total,10}");
                TotalCost += i.Total;
                SNo += 1;
            }

            sw.WriteLine("------------------------------------------------------------------------");
            sw.WriteLine();
            sw.Write($"{"Total Cost :- ",20}");
            sw.WriteLine($" {TotalCost}");
            sw.WriteLine($"Total Amount with discount: {TotalCost * 0.7}");
            sw.Close();
        }
    }
}
