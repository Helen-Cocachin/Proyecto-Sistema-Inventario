package com.grupodetrabajo.backend.inventarioapp.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.grupodetrabajo.backend.inventarioapp.model.Usuario;
import com.grupodetrabajo.backend.inventarioapp.repository.UsuarioRepository;
import com.grupodetrabajo.backend.inventarioapp.service.UsuarioService;

public class UsuarioServiceImpl implements UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public List<Usuario> listarTodos() {
        return usuarioRepository.findAll();
    }

    @Override
    public Usuario guardar(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }

    @Override
    public void eliminar(Long id) {
        usuarioRepository.deleteById(id);
    }
    
}
