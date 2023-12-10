const Team = mongoose.model('Team', teamSchema);

// Validación antes de guardar
const newTeam = new Team({
  name: req.body.name,
  country: req.body.country,
});

newTeam.validate((err) => {
  if (err) {
    return res.status(400).json({ error: err.message });
  }

  // Guardar el equipo en la base de datos
  newTeam.save((error, team) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
    return res.status(201).json({ team });
  });
});
