package com.grupodetrabajo.backend.inventarioapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.grupodetrabajo.backend.inventarioapp.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}

