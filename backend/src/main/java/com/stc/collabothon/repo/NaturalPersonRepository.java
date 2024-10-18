package com.stc.collabothon.repo;

import com.stc.collabothon.model.NaturalPerson;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NaturalPersonRepository extends JpaRepository<NaturalPerson, Long> {
}
