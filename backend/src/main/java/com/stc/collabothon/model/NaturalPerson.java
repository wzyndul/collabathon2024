package com.stc.collabothon.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Builder
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "natural_persons")
public class NaturalPerson {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "natural_persons_id_seq")
    @SequenceGenerator(name = "natural_persons_id_seq", sequenceName = "natural_persons_id_SEQ", allocationSize = 1)
    private Long id;

    @Column(name = "last_name")
    private String lastName;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "date_of_birth")
    private String dateOfBirth;
    private String salutation;
    private String title;
    @Column(name = "phone_number")
    private String phoneNumber;
    @Column(name = "email_address")
    private String emailAddress;
    @Column(name = "postal_Address")
    private String postalAddress;
    private String nationality;
    @OneToOne(mappedBy = "naturalPerson",  cascade = CascadeType.ALL)
    @JsonBackReference
    private Account account;
}
