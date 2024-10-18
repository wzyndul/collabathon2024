package com.stc.collabothon.util;

import com.stc.collabothon.model.Account;
import com.stc.collabothon.model.NaturalPerson;
import com.stc.collabothon.repo.AccountRepository;
import com.stc.collabothon.repo.NaturalPersonRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class PersonsAccountInitializer implements CommandLineRunner {

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    NaturalPersonRepository naturalPersonRepository;

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
        accountRepository.save(account1);

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
        accountRepository.save(account2);

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
        accountRepository.save(account3);
    }
}
