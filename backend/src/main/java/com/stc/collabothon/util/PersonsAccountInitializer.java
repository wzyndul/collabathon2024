package com.stc.collabothon.util;

import com.stc.collabothon.model.Account;
import com.stc.collabothon.model.NaturalPerson;
import com.stc.collabothon.repo.AccountRepository;
import com.stc.collabothon.repo.NaturalPersonRepository;
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
    public void run(String... args) throws Exception {


//        NaturalPerson person = NaturalPerson
//                .builder()
//                .firstName("Wojti")
//                .lastName("TEST")
//                .dateOfBirth("01-01-2000")
//                .build();
//        person = naturalPersonRepository.save(person);
        Account account = Account.builder()
                .balanceAmount(177000.99)
                .build();
        accountRepository.save(account);



    }
}
