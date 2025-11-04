package com.facemouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.facemouse.entities.Admin;

public interface AdminRepository extends JpaRepository< Admin, Long>{

	Admin findByEmail(String email);
}
