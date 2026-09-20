CREATE DATABASE IF NOT EXISTS blog_n2;
USE blog_n2;

CREATE TABLE IF NOT EXISTS User (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'auteur') DEFAULT 'auteur'
);

CREATE TABLE IF NOT EXISTS Auteur (
    id INT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    biographie TEXT,
    avatar VARCHAR(255),
    FOREIGN KEY (id) REFERENCES User(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS Categorie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    couleur VARCHAR(50),
    icone VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Article (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    contenu TEXT NOT NULL,
    image_couverture VARCHAR(255),
    statut ENUM('brouillon', 'publie') DEFAULT 'brouillon',
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP,
    vues INT DEFAULT 0,
    categorie_id INT NOT NULL,
    auteur_id INT NOT NULL,
    FOREIGN KEY (categorie_id) REFERENCES Categorie(id) ON DELETE CASCADE,
    FOREIGN KEY (auteur_id) REFERENCES Auteur(id) ON DELETE CASCADE
);
