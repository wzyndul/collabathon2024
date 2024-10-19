package com.stc.collabothon.util;

import com.stc.collabothon.model.Account;
import com.stc.collabothon.model.NaturalPerson;
import com.stc.collabothon.model.offer.InvestmentType;
import com.stc.collabothon.model.transaction.*;
import com.stc.collabothon.repo.AccountRepository;
import com.stc.collabothon.repo.BankTransactionRepository;
import com.stc.collabothon.repo.NaturalPersonRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class PersonsAccountInitializer implements CommandLineRunner {

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    NaturalPersonRepository naturalPersonRepository;

    @Autowired
    private BankTransactionRepository bankTransactionRepository;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        // Create first individual user
        NaturalPerson person1 = NaturalPerson.builder()
                .firstName("Wojti")
                .lastName("TEST")
                .dateOfBirth("2000-01-01")
                .salutation("Mr.")
                .title("Software Engineer")
                .phoneNumber("123-456-7890")
                .emailAddress("wojti@example.com")
                .postalAddress("123 Main St, City, Country")
                .nationality("Polish")
                .build();

        person1 = naturalPersonRepository.save(person1);

        Account account1 = Account.builder()
                .iban("PL12345678901234567890123456")
                .bban("12345678901234567890123456")
                .accountNumberInternal("1234567890")
                .accountNumberDisplay("9876543210")
                .currency("PLN")
                .balanceAmount(50000.99)
                .isIndividual(true)
                .naturalPerson(person1)
                .build();

        person1.setAccount(account1);
        account1 = accountRepository.save(account1);

        // Create second individual user
        NaturalPerson person2 = NaturalPerson.builder()
                .firstName("Anna")
                .lastName("KOWALSKA")
                .dateOfBirth("1995-05-15")
                .salutation("Ms.")
                .title("Marketing Specialist")
                .phoneNumber("987-654-3210")
                .emailAddress("anna@example.com")
                .postalAddress("456 Side St, City, Country")
                .nationality("Polish")
                .build();

        person2 = naturalPersonRepository.save(person2);

        Account account2 = Account.builder()
                .iban("PL65432109876543210987654321")
                .bban("65432109876543210987654321")
                .accountNumberInternal("0987654321")
                .accountNumberDisplay("1234567890")
                .currency("PLN")
                .balanceAmount(75000.50)
                .isIndividual(true)
                .naturalPerson(person2)
                .build();

        person2.setAccount(account2);
        account2 = accountRepository.save(account2);

        // Create non-individual user (business)
        NaturalPerson business = NaturalPerson.builder()
                .firstName("TechCorp")
                .lastName("Inc.")
                .dateOfBirth("2010-01-01") // Use a placeholder date for a business
                .salutation("N/A")
                .title("Business")
                .phoneNumber("111-222-3333")
                .emailAddress("contact@techcorp.com")
                .postalAddress("789 Corporate Blvd, City, Country")
                .nationality("Polish")
                .build();

        business = naturalPersonRepository.save(business);

        Account account3 = Account.builder()
                .iban("PL11122334455667788990001122")
                .bban("11122334455667788990001122")
                .accountNumberInternal("5566778899")
                .accountNumberDisplay("9988776655")
                .currency("PLN")
                .balanceAmount(100000.00)
                .isIndividual(false) // Set to false for a business account
                .naturalPerson(business)
                .build();

        business.setAccount(account3);
        account3 = accountRepository.save(account3);

        // Add more transactions for account1 (first user)

        // Currency Exchange
        CurrencyExchange currencyExchange1 = new CurrencyExchange();
        currencyExchange1.setTransactionDate(LocalDateTime.now().minusDays(1));
        currencyExchange1.setAmount(3000.0);
        currencyExchange1.setDescription("Currency exchange from PLN to USD");
        currencyExchange1.setCurrency(Currency.PLN);
        currencyExchange1.setStatus(Status.SUCCESS);
        currencyExchange1.setAccount(account1);  // Use persisted account1
        currencyExchange1.setTargetCurrency(Currency.USD);
        currencyExchange1.setExchangeRate(0.25);  // Example rate
        currencyExchange1.setOriginalAmount(3000);
        currencyExchange1.setExchangedAmount(750);

        // Loan for account1
        Loan loan1 = new Loan();
        loan1.setTransactionDate(LocalDateTime.now().minusDays(5));
        loan1.setAmount(25000.0);
        loan1.setDescription("Personal loan");
        loan1.setCurrency(Currency.PLN);
        loan1.setStatus(Status.PENDING);
        loan1.setAccount(account1);  // Use persisted account1
        loan1.setInterestRate(5.0);
        loan1.setLoanAmount(25000.0);
        loan1.setLoanDuration(180); // 15 years

        // Investment for account1
        Investment investment1 = new Investment();
        investment1.setTransactionDate(LocalDateTime.now().minusDays(3));
        investment1.setAmount(5000.0);
        investment1.setDescription("Investment in renewable energy stocks");
        investment1.setCurrency(Currency.EUR);
        investment1.setStatus(Status.SUCCESS);
        investment1.setAccount(account1);  // Use persisted account1
        investment1.setInvestmentType(InvestmentType.EQUITY);
        investment1.setManagementFee(1.3);
        investment1.setStockName("Renewable Energy Fund");

        // Money Transfer for account1
        MoneyTransfer transfer1 = new MoneyTransfer();
        transfer1.setTransactionDate(LocalDateTime.now().minusDays(7));
        transfer1.setAmount(1200.0);
        transfer1.setDescription("Transfer to Anna Kowalska");
        transfer1.setCurrency(Currency.PLN);
        transfer1.setStatus(Status.SUCCESS);
        transfer1.setAccount(account1);  // Use persisted account1
        transfer1.setRecipientAccount(account2);  // Transfer to Anna Kowalska (account2)

        // Save all additional transactions for account1
        bankTransactionRepository.save(currencyExchange1);
        bankTransactionRepository.save(loan1);
        bankTransactionRepository.save(investment1);
        bankTransactionRepository.save(transfer1);

        // Save other existing transactions
        CurrencyExchange currencyExchange2 = new CurrencyExchange();
        currencyExchange2.setTransactionDate(LocalDateTime.now());
        currencyExchange2.setAmount(1000.0);
        currencyExchange2.setDescription("Currency exchange from EUR to USD");
        currencyExchange2.setCurrency(Currency.EUR);
        currencyExchange2.setStatus(Status.SUCCESS);
        currencyExchange2.setAccount(account1);  // Use persisted account
        currencyExchange2.setTargetCurrency(Currency.USD);
        currencyExchange2.setExchangeRate(1.1);
        currencyExchange2.setOriginalAmount(1000);
        currencyExchange2.setExchangedAmount(1100);

        Investment investment = new Investment();
        investment.setTransactionDate(LocalDateTime.now());
        investment.setAmount(5000.0);
        investment.setDescription("Investment in tech stocks");
        investment.setCurrency(Currency.USD);
        investment.setStatus(Status.SUCCESS);
        investment.setAccount(account1);  // Use persisted account
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

        // Now save the original transactions
        bankTransactionRepository.save(currencyExchange2);
        bankTransactionRepository.save(investment);
        bankTransactionRepository.save(loan);
        bankTransactionRepository.save(moneyTransfer);
    }
}
