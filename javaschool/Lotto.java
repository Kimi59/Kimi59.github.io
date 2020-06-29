import java.io.*;
public class Lotto
{
    public static void main (String[] args) throws IOException
    {
	DataInputStream input = new DataInputStream (System.in);

	int w1, w2, w3, w4, w5, w6, g1, g2, g3, g4, g5, g6, charity, count = 0, hold = 0, bankBal = 20;
	String playAgain = "Y";
	String donate = "Y";
	String finalize = "Y";
	System.out.println ("Welcome to Lotto 649");
	System.out.println ("");
	System.out.println ("Your current bank balance is $" + bankBal);
	System.out.println ("");

	System.out.print ("Do you want to pay $2 to play the Lotto? Y/N: ");
	playAgain = input.readLine ();


	while (playAgain.equalsIgnoreCase ("Y") && bankBal > 0)
	{
	    bankBal = bankBal - 2;
	    count = count + 2;
	    int win = 0;
	    //Randomizing Winning Numbers
	    w1 = (int) (Math.random () * 49 + 1);
	    w2 = (int) (Math.random () * 49 + 1);
	    w3 = (int) (Math.random () * 49 + 1);
	    w4 = (int) (Math.random () * 49 + 1);
	    w5 = (int) (Math.random () * 49 + 1);
	    w6 = (int) (Math.random () * 49 + 1);

	    while (w2 == w1)
	    {
		w2 = (int) (Math.random () * 49 + 1);
	    }
	    while (w3 == w2 || w3 == w1)
	    {
		w3 = (int) (Math.random () * 49 + 1);
	    }
	    while (w4 == w3 || w4 == w2 || w4 == w1)
	    {
		w4 = (int) (Math.random () * 49 + 1);
	    }
	    while (w5 == w4 || w5 == w3 || w5 == w2 || w5 == w1)
	    {
		w5 = (int) (Math.random () * 49 + 1);
	    }
	    while (w6 == w5 || w6 == w4 || w6 == w3 || w6 == w2 || w6 == w1)
	    {
		w6 = (int) (Math.random () * 49 + 1);
	    }
	    //Sorting guess numbers
	    for (int i = 1 ; i <= 5 ; i++)
	    {
		if (w1 > w2)
		{
		    hold = w1;
		    w1 = w2;
		    w2 = hold;
		}
		if (w2 > w3)
		{
		    hold = w2;
		    w2 = w3;
		    w3 = hold;
		}
		if (w3 > w4)
		{
		    hold = w3;
		    w3 = w4;
		    w4 = hold;
		}
		if (w4 > w5)
		{
		    hold = w4;
		    w4 = w5;
		    w5 = hold;
		}
		if (w5 > w6)
		{
		    hold = w5;
		    w5 = w6;
		    w6 = hold;
		}
	    }
	    //User input and user error check
	    System.out.println ("");
	    System.out.print ("Enter your first guess between 1 and 49: ");
	    g1 = Integer.parseInt (input.readLine ());
	    System.out.println ("");

	    while (g1 < 1 || g1 > 50)
	    {
		System.out.print ("Error. Your first guess should be 1 - 49: ");
		g1 = Integer.parseInt (input.readLine ());
		System.out.println ("");
	    }

	    System.out.print ("Enter your second guess between 1 and 49: ");
	    g2 = Integer.parseInt (input.readLine ());
	    System.out.println ("");

	    while (g2 < 1 || g2 > 50)
	    {
		System.out.print ("Error. Your second guess should be 1 - 49: ");
		g2 = Integer.parseInt (input.readLine ());
		System.out.println ("");
	    }

	    System.out.print ("Enter your third guess between 1 and 49: ");
	    g3 = Integer.parseInt (input.readLine ());
	    System.out.println ("");

	    while (g3 < 1 || g3 > 50)
	    {
		System.out.print ("Error. Your third guess should be 1 - 49: ");
		g3 = Integer.parseInt (input.readLine ());
		System.out.println ("");
	    }

	    System.out.print ("Enter your fourth guess between 1 and 49: ");
	    g4 = Integer.parseInt (input.readLine ());
	    System.out.println ("");

	    while (g4 < 1 || g4 > 50)
	    {
		System.out.print ("Error. Your fourth guess should be 1 - 49: ");
		g4 = Integer.parseInt (input.readLine ());
		System.out.println ("");
	    }

	    System.out.print ("Enter your fifth guess between 1 and 49: ");
	    g5 = Integer.parseInt (input.readLine ());
	    System.out.println ("");

	    while (g5 < 1 || g5 > 50)
	    {
		System.out.print ("Error. Your fifth guess should be 1 - 49: ");
		g5 = Integer.parseInt (input.readLine ());
		System.out.println ("");
	    }

	    System.out.print ("Enter your sixth guess between 1 and 49: ");
	    g6 = Integer.parseInt (input.readLine ());

	    while (g6 < 1 || g6 > 50)
	    {
		System.out.print ("Error. Your sixth guess should be 1 - 49: ");
		g6 = Integer.parseInt (input.readLine ());
		System.out.println ("");
	    }
	    //Duplicated numbers error check
	    while (g2 == g1)
	    {
		System.out.print ("Duplicate number. Enter another guess between 1 - 49: ");
		g2 = Integer.parseInt (input.readLine ());
	    }

	    while (g2 < 1 || g2 > 50)
	    {
		System.out.print ("Error. Your second guess should be 1 - 49: ");
		g2 = Integer.parseInt (input.readLine ());
		System.out.println ("");
	    }

	    while (g3 == g2 || g3 == g1)
	    {
		System.out.print ("Duplicate number. Enter another guess between 1 - 49: ");
		g3 = Integer.parseInt (input.readLine ());
	    }
	    while (g3 < 1 || g3 > 50)
	    {
		System.out.print ("Error. Your third guess should be 1 - 49: ");
		g3 = Integer.parseInt (input.readLine ());
		System.out.println ("");
	    }
	    while (g4 == g3 || g4 == g2 || g4 == g1)
	    {
		System.out.print ("Duplicate number. Enter another guess between 1 - 49: ");
		g4 = Integer.parseInt (input.readLine ());
	    }
	    while (g4 < 1 || g4 > 50)
	    {
		System.out.print ("Error. Your fourth guess should be 1 - 49: ");
		g4 = Integer.parseInt (input.readLine ());
		System.out.println ("");
	    }
	    while (g5 == g4 || g5 == g3 || g5 == g2 || g5 == g1)
	    {
		System.out.print ("Duplicate number. Enter another guess between 1 - 49: ");
		g5 = Integer.parseInt (input.readLine ());
	    }
	    while (g5 < 1 || g5 > 50)
	    {
		System.out.print ("Error. Your fifth guess should be 1 - 49: ");
		g5 = Integer.parseInt (input.readLine ());
		System.out.println ("");
	    }
	    while (g6 == g5 || g6 == g4 || g6 == g3 || g6 == g2 || g6 == g1)
	    {
		System.out.print ("Duplicate number. Enter another guess between 1 - 49: ");
		g6 = Integer.parseInt (input.readLine ());
	    }
	    while (g6 < 1 || g6 > 50)
	    {
		System.out.print ("Error. Your sixth guess should be 1 - 49: ");
		g6 = Integer.parseInt (input.readLine ());
		System.out.println ("");
	    }
	    for (int x = 1 ; x <= 5 ; x++)
	    {
		if (g1 > g2)
		{
		    hold = g1;
		    g1 = g2;
		    g2 = hold;
		}
		if (g2 > g3)
		{
		    hold = g2;
		    g2 = g3;
		    g3 = hold;
		}
		if (g3 > g4)
		{
		    hold = g3;
		    g3 = g4;
		    g4 = hold;
		}
		if (g4 > g5)
		{
		    hold = g4;
		    g4 = g5;
		    g5 = hold;
		}
		if (g5 > g6)
		{
		    hold = g5;
		    g5 = g6;
		    g6 = hold;
		}
	    }

	    //displaying numbers
	    System.out.println ("Your numbers are        " + g1 + "\t" + g2 + "\t" + g3 + "\t" + g4 + "\t" + g5 + "\t" + g6);
	    System.out.println ("The winning numbers are " + w1 + "\t" + w2 + "\t" + w3 + "\t" + w4 + "\t" + w5 + "\t" + w6);

	    //Winning numbers check
	    if (g1 == w1 || g1 == w2 || g1 == w3 || g1 == w4 || g1 == w5 || g1 == w6)
	    {
		win++;
	    }
	    if (g2 == w1 || g2 == w2 || g2 == w3 || g2 == w4 || g2 == w5 || g2 == w6)
	    {
		win++;
	    }
	    if (g3 == w1 || g3 == w2 || g3 == w3 || g3 == w4 || g3 == w5 || g3 == w6)
	    {
		win++;
	    }
	    if (g4 == w1 || g4 == w2 || g4 == w3 || g4 == w4 || g4 == w5 || g4 == w6)
	    {
		win++;
	    }
	    if (g5 == w1 || g5 == w2 || g5 == w3 || g5 == w4 || g5 == w5 || g5 == w6)
	    {
		win++;
	    }
	    if (g6 == w1 || g6 == w2 || g6 == w3 || g6 == w4 || g6 == w5 || g6 == w6)
	    {
		win++;
	    }

	    if (win == 0)
	    {
		System.out.println ("");
		System.out.println ("You have no matches");
	    }
	    else if (win > 0 || win < 6)
	    {
		System.out.println ("");
		System.out.println ("You have " + win + " matches");
		bankBal = bankBal + win;
	    }
	    else
	    {
		System.out.println ("");
		System.out.println ("Congraulations! You've won the jackpot!! ");
		System.out.println ("You've one 1 million dollars! ");
		bankBal = bankBal + 1000000;
		System.out.println ("Currently, you have " + bankBal + " in your bank account");
	    }

	    //Playing Again
	    System.out.println ("Your current bank balance is " + bankBal);
	    System.out.print ("Do you want to play again? Y/N: ");
	    playAgain = input.readLine ();
	}

	if (bankBal == 0)
	{
	    System.out.println ("You have no money in your bank account!");

	}
	if (!playAgain.equalsIgnoreCase ("Y") && count > 1)
	{
	    System.out.println ("");
	    System.out.println ("Your current bank balance is $" + bankBal);
	    System.out.print ("Do you want to some of your money to charity? Y/N: ");
	    donate = input.readLine ();
	}

	if (donate.equalsIgnoreCase ("Y") && count > 1)
	{
	    System.out.println ("");
	    System.out.print ("How much money are you willing to donate? ");
	    charity = Integer.parseInt (input.readLine ());
	    System.out.println ("");

	    while (charity > bankBal)
	    {
		System.out.println ("You do not have enough funds to donate this amount of money");
		System.out.println ("Currently, you have $" + bankBal + " in your bank account");
		System.out.print ("How much money are you willing to donate? ");
		charity = Integer.parseInt (input.readLine ());
		System.out.println ("");
	    }
	    bankBal = bankBal - charity;
	    System.out.println ("Thank you for donating, your current bank balance is $" + bankBal);

	}
	if (!donate.equalsIgnoreCase ("Y") || !playAgain.equalsIgnoreCase ("Y"))
	{
	    System.out.println ("");
	    System.out.print ("Have a nice day ");
	}
    }
}


