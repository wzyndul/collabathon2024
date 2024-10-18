package com.stc.collabothon.util;

import com.stc.collabothon.model.transaction.*;
import com.stc.collabothon.model.offer.InvestmentType;
import com.stc.collabothon.model.transaction.CurrencyExchange;
import com.stc.collabothon.model.transaction.Status;
import com.stc.collabothon.model.Account;
import com.stc.collabothon.repo.AccountRepository;
import com.stc.collabothon.repo.BankTransactionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;

@Component
public class BankTransactionInitializer implements CommandLineRunner {

    @Autowired
    private BankTransactionRepository bankTransactionRepository;

    @Autowired
    private AccountRepository accountRepository; // Add repository for accounts

    @Override
    public void run(String... args) throws Exception {
        // Create and save accounts first
        Account account1 = new Account();
        account1.setIban("DE89370400440532013000");
        account1.setBban("37040044");
        account1.setAccountNumberInternal("1234567890");
        account1.setAccountNumberDisplay("1234 5678 90");
        account1.setCurrency("EUR");
        account1.setBalanceAmount(10000.0);
        account1 = accountRepository.save(account1); // Save account1

        Account account2 = new Account();
        account2.setIban("FR7630006000011234567890189");
        account2.setBban("3000600001");
        account2.setAccountNumberInternal("0987654321");
        account2.setAccountNumberDisplay("0987 6543 21");
        account2.setCurrency("USD");
        account2.setBalanceAmount(20000.0);
        account2 = accountRepository.save(account2); // Save account2

        // Now create transactions using the saved accounts
        CurrencyExchange currencyExchange = new CurrencyExchange();
        currencyExchange.setTransactionDate(LocalDateTime.now());
        currencyExchange.setAmount(1000.0);
        currencyExchange.setDescription("Currency exchange from EUR to USD");
        currencyExchange.setCurrency(Currency.EUR);
        currencyExchange.setStatus(Status.SUCCESS);
        currencyExchange.setAccount(account1);  // Use persisted account
        currencyExchange.setTargetCurrency(Currency.USD);
        currencyExchange.setExchangeRate(1.1);
        currencyExchange.setOriginalAmount(1000);
        currencyExchange.setExchangedAmount(1100);

        Investment investment = new Investment();
        investment.setTransactionDate(LocalDateTime.now());
        investment.setAmount(5000.0);
        investment.setDescription("Investment in tech stocks");
        investment.setCurrency(Currency.USD);
        investment.setStatus(Status.SUCCESS);
        investment.setAccount(account2);  // Use persisted account
        investment.setInvestmentType(InvestmentType.EQUITY);
        investment.setManagementFee(1.5);
        investment.setStockName("Tech Fund");

        Loan loan = new Loan();
        loan.setTransactionDate(LocalDateTime.now());
        loan.setAmount(15000.0);
        loan.setDescription("Home loan");
        loan.setCurrency(Currency.EUR);
        loan.setStatus(Status.PENDING);
        loan.setAccount(account1);  // Use persisted account
        loan.setInterestRate(3.5);
        loan.setLoanAmount(15000.0);
        loan.setLoanDuration(240);

        MoneyTransfer moneyTransfer = new MoneyTransfer();
        moneyTransfer.setTransactionDate(LocalDateTime.now());
        moneyTransfer.setAmount(2000.0);
        moneyTransfer.setDescription("Money transfer to another account");
        moneyTransfer.setCurrency(Currency.GBP);
        moneyTransfer.setStatus(Status.SUCCESS);
        moneyTransfer.setAccount(account2);  // Use persisted account
        moneyTransfer.setRecipientAccount(account1);  // Use persisted account

        // Now save the transactions
        bankTransactionRepository.save(currencyExchange);
        bankTransactionRepository.save(investment);
        bankTransactionRepository.save(loan);
        bankTransactionRepository.save(moneyTransfer);
    }
}