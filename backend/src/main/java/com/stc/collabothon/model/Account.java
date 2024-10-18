package com.stc.collabothon.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "account_id_seq")
    @SequenceGenerator(name = "account_id_seq", sequenceName = "account_id_SEQ", allocationSize = 1)
    private Long id;
    private String iban;
    private String bban;
    @Column(name = "account_number_internal")
    private String accountNumberInternal;
    @Column(name = "account_number_display")
    private String accountNumberDisplay;
    private String currency;
    @Column(name = "balance_amount")
    private double balanceAmount;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "natural_person_id", referencedColumnName = "id")
    private NaturalPerson naturalPerson;
}
