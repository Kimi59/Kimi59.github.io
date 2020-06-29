// The "CompoundInt" class.
import java.io.*;
import java.text.*;
public class CompoundInt
{
    public static void main (String[] args) throws IOException
    {
	DataInputStream input = new DataInputStream (System.in);
	double bankBal = 0, intRate = 0;


	NumberFormat d = new DecimalFormat ("$0.00");
	System.out.print ("Please enter the beginning bank balance ");
	bankBal = Double.parseDouble (input.readLine ());

	System.out.print ("Please enter the intrest rate (ie: 3.5) ");
	intRate = Double.parseDouble (input.readLine ());

	intRate = 0.01 * intRate;

	for (int x = 1 ; x <= 10 ; x++)
	{
	    bankBal = (bankBal + bankBal * intRate);
	    System.out.println ("The balance after " + x + " years is " + d.format (bankBal));
	}


	// Place your code here
    } // main method
} // CompoundInt class
