package com.facemouse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.facemouse.entities.Admin;
import com.facemouse.repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	private AdminRepository adminRepository;
	
	public Admin saveAdmin(Admin admin) {
		return adminRepository.save(admin);
	}
	
	public List<Admin> getAllAdmin() {
		return adminRepository.findAll();
	}
	
	public Admin getAdminById(Long id) {
		return adminRepository.findById(id).orElse(null);
	}
	
	public void deleteAdmin(Long id) {
		adminRepository.deleteById(id);
	}
	
	//Método para o login
	public Admin autenticar(String email, String senha) {
		Admin pessoa = adminRepository.findByEmail(email);
		
		if(pessoa != null && pessoa.getSenha().equals(senha)) {
			return pessoa;
		}
		else {
			return null;
		}
	}
}
