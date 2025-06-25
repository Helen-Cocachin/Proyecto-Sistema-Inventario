package com.grupodetrabajo.backend.inventarioapp.service;

import java.util.List;
import com.grupodetrabajo.backend.inventarioapp.model.Usuario;

public interface UsuarioService {
    List<Usuario> listarTodos();
    Usuario guardar(Usuario usuario);
    void eliminar(Long id);
}

