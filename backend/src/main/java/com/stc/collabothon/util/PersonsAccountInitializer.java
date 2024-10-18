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

        //TRANSACTIONS
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
