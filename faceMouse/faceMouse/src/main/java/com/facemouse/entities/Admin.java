package com.facemouse.entities;

import jakarta.persistence.*;
// Opcional (impede vazar senha se alguém retornar a entidade inteira):
// import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "tb_admin")
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_admin")
    private Long idAdmin;

    @Column(name = "email", nullable = false, unique = true, length = 255)
    private String email;

    // @JsonProperty(access = JsonProperty.Access.WRITE_ONLY) // opcional
    @Column(name = "senha", nullable = false, length = 255)
    private String senha;

    public Admin() {}

    public Admin(Long idAdmin, String email, String senha) {
        this.idAdmin = idAdmin;
        this.email = email;
        this.senha = senha;
    }

    public Long getIdAdmin() { return idAdmin; }
    public void setIdAdmin(Long idAdmin) { this.idAdmin = idAdmin; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getSenha() { return senha; }
    public void setSenha(String senha) { this.senha = senha; }
}