package com.stc.collabothon.util;

import com.stc.collabothon.model.Account;
import com.stc.collabothon.model.client.Client;
import com.stc.collabothon.model.client.CorporateClient;
import com.stc.collabothon.model.client.NaturalPerson;
import com.stc.collabothon.model.offer.InvestmentType;
import com.stc.collabothon.model.transaction.*;
import com.stc.collabothon.repo.AccountRepository;
import com.stc.collabothon.repo.BankTransactionRepository;
import com.stc.collabothon.repo.ClientRepository;
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
    ClientRepository clientRepository;

    @Autowired
    private BankTransactionRepository bankTransactionRepository;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        // Create first individual user
        Client person1 = NaturalPerson.builder()
                .firstName("Wojti")
                .lastName("TEST")
                .dateOfBirth("01-01-2000")
                .salutation("Mr.")
                .title("Software Engineer")
                .phoneNumber("123-456-7890")
                .emailAddress("wojti@example.com")
                .postalAddress("123 Main St, City, Country")
                .nationality("Polish")
                .build();

        person1 = clientRepository.save(person1);

        Account account1 = Account.builder()
                .iban("PL12345678901234567890123456")
                .bban("12345678901234567890123456")
                .accountNumberInternal("1234567890")
                .accountNumberDisplay("9876543210")
                .currency("PLN")
                .balanceAmount(50000.99)
                .client(person1)
                .build();

        person1.setAccount(account1);
        account1 = accountRepository.save(account1);

        // Create second individual user
        Client person2 = NaturalPerson.builder()
                .firstName("Anna")
                .lastName("KOWALSKA")
                .dateOfBirth("15-05-1995")
                .salutation("Ms.")
                .title("Marketing Specialist")
                .phoneNumber("987-654-3210")
                .emailAddress("anna@example.com")
                .postalAddress("456 Side St, City, Country")
                .nationality("Polish")
                .build();

        person2 = clientRepository.save(person2);

        Account account2 = Account.builder()
                .iban("PL65432109876543210987654321")
                .bban("65432109876543210987654321")
                .accountNumberInternal("0987654321")
                .accountNumberDisplay("1234567890")
                .currency("PLN")
                .balanceAmount(75000.50)
                .client(person2)
                .build();

        person2.setAccount(account2);
        account2 = accountRepository.save(account2);

        // Create non-individual user (business)
        Client business = CorporateClient.builder()
                .companyName("TechCorp")
                .companySize(150)
                .phoneNumber("111-222-3333")
                .emailAddress("contact@techcorp.com")
                .postalAddress("789 Corporate Blvd, City, Country")
                .nationality("Polish")
                .build();

        business = clientRepository.save(business);

        Account account3 = Account.builder()
                .iban("PL11122334455667788990001122")
                .bban("11122334455667788990001122")
                .accountNumberInternal("5566778899")
                .accountNumberDisplay("9988776655")
                .currency("PLN")
                .balanceAmount(100000.00)
                .client(business)
                .build();

        business.setAccount(account3);
        account3 = accountRepository.save(account3);

        // Currency Exchange
        CurrencyExchange currencyExchange1 = new CurrencyExchange(LocalDateTime.now().minusDays(1), 3000.0, "Currency exchange from PLN to USD", Currency.PLN, Status.SUCCESS, account1, Currency.USD, 0.25, 3000, 750);

        // Loan for account1
        Loan loan1 = new Loan(LocalDateTime.now().minusDays(5), 25000.0, "Personal loan", Currency.PLN, Status.PENDING, account1, 5.0, 25000.0, 180);

        // Investment for account1
        Investment investment1 = new Investment(LocalDateTime.now().minusDays(3), 5000.0, "Investment in renewable energy stocks", Currency.EUR, Status.SUCCESS, account1, InvestmentType.EQUITY, 1.3, "Renewable Energy Fund");

        // Money Transfer for account1
        MoneyTransfer transfer1 = new MoneyTransfer(LocalDateTime.now().minusDays(7), 1200.0, "Transfer to Anna Kowalska", Currency.PLN, Status.SUCCESS, account1, account2);

        // Save all additional transactions for account1
        bankTransactionRepository.save(currencyExchange1);
        bankTransactionRepository.save(loan1);
        bankTransactionRepository.save(investment1);
        bankTransactionRepository.save(transfer1);

        // Save other existing transactions
        CurrencyExchange currencyExchange2 = new CurrencyExchange(LocalDateTime.now(), 1000.0, "Currency exchange from EUR to USD", Currency.EUR, Status.SUCCESS, account1, Currency.USD, 1.1, 1000, 1100);

        Investment investment = new Investment(LocalDateTime.now(), 5000.0, "Investment in tech stocks", Currency.USD, Status.SUCCESS, account1, InvestmentType.EQUITY, 1.5, "Tech Fund");

        Loan loan = new Loan(LocalDateTime.now(), 15000.0, "Home loan", Currency.EUR, Status.PENDING, account1, 3.5, 15000.0, 240);

        MoneyTransfer moneyTransfer = new MoneyTransfer(LocalDateTime.now(), 2000.0, "Money transfer to another account", Currency.GBP, Status.SUCCESS, account2, account1);

        // Now save the original transactions
        bankTransactionRepository.save(currencyExchange2);
        bankTransactionRepository.save(investment);
        bankTransactionRepository.save(loan);
        bankTransactionRepository.save(moneyTransfer);
    }
}
