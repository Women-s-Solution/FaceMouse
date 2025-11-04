package com.facemouse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.facemouse.entities.Admin;
import com.facemouse.service.AdminService;

@RestController
@RequestMapping("/administradores")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	@PostMapping
	public Admin createAdmin(@RequestBody Admin admin) {
		return adminService.saveAdmin(admin);
	}
	
	@GetMapping
	public List<Admin> getAllAdmin() {
		return adminService.getAllAdmin();
	}
	
	@GetMapping("/{id}")
	public Admin getAdminById(@PathVariable Long id) {
		return adminService.getAdminById(id);
	}
	
	@DeleteMapping("/{id}")
	public void deleteAdminById(@PathVariable Long id) {
		adminService.deleteAdmin(id);
	}
	
	//Método para o login
	@PostMapping("/login")
	public Admin login(@RequestBody Admin loginRequest) {
		Admin pessoa = adminService.autenticar(loginRequest.getEmail(), loginRequest.getSenha());
		
		if(pessoa != null) {
			return pessoa;
		}
		else {
			return null;
		}
	}
}
