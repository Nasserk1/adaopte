-- ========================================
-- 1. INSERTION DES TYPES D'ANIMAUX
-- ========================================

INSERT INTO types (name) VALUES
('Chien'),
('Chat'),
('Lapin'),
('Rongeur'),
('Oiseau'),
('Reptile'),
('Poisson'),
('Tortue'),
('Furet'),
('Hamster'),
('Chinchilla'),
('Gerbille'),
('Rat'),
('Souris'),
('Perroquet');

-- ========================================
-- 2. INSERTION DES RACES
-- ========================================

INSERT INTO breeds (name, type_id) VALUES
('Pug', 1),                 
('Chat noir et blanc', 2),  
('Lapin', 3),               
('Chow-chow', 1),           
('Chat Roux', 2),           
('Cochon d''Inde', 4),      
('Lapin nain brun', 3),     
('Samoyed', 1),             
('Golden Retriever', 1),         
('Berger Allemand', 1),          
('Beagle', 1),                   
('Maine Coon', 2),               
('Persan', 2),                   
('Siamois', 2),                  
('Lapin Bélier', 3),             
('Lapin Angora', 3),             
('Hamster Doré', 10),            
('Hamster Russe', 10),           
('Chinchilla Gris', 11),         
('Gerbille de Mongolie', 12),    
('Rat Dumbo', 13),               
('Souris Domestique', 14),       
('Perruche Ondulée', 5),         
('Canari', 5),                   
('Ara Bleu', 15),                
('Pogona Vitticeps', 6),
('Gecko Léopard', 6),            
('Tortue Hermann', 8),           
('Tortue de Floride', 8),        
('Furet Albinos', 9),            
('Poisson Rouge', 7);            

-- ========================================
-- 3. INSERTION DES REFUGES
-- ========================================

INSERT INTO shelters (name, address, city, zip_code, phone, email) VALUES
('Refuge des Quatre Pattes', '123 rue des Animaux', 'Lille', '59000', '03 20 12 34 56', 'contact@quatrepattes.fr'),
('SPA Strasbourg', '45 avenue de la Liberté', 'Strasbourg', '67000', '03 88 45 67 89', 'contact@spa-strasbourg.fr'),
('Refuge Alpin', '8 chemin du Lac', 'Annecy', '74000', '04 50 11 22 33', 'contact@refuge-alpin.fr'),
('SPA Grenoble', '200 rue de la Montagne', 'Grenoble', '38000', '04 76 55 66 77', 'contact@spa-grenoble.fr'),
('Refuge de la Gironde', '55 quai des Chartrons', 'Bordeaux', '33000', '05 56 78 90 12', 'contact@refuge-gironde.fr'),
('SPA Tours', '12 rue des Jardins', 'Tours', '37000', '02 47 33 44 55', 'contact@spa-tours.fr'),
('Refuge du Poitou', '78 avenue de la République', 'Poitiers', '86000', '05 49 22 33 44', 'contact@refuge-poitou.fr'),
('SPA Lyon Brignais', '300 chemin de la Saulaie', 'Brignais', '69530', '04 78 05 07 09', 'contact@spa-lyon.org'),
('Refuge de l''Espoir', '15 rue des Acacias', 'Nantes', '44000', '02 40 49 51 53', 'contact@refuge-espoir.fr'),
('SPA Marseille', '480 chemin de la Madrague', 'Marseille', '13015', '04 91 03 05 07', 'contact@spa-marseille.fr'),
('Refuge de Forcalquier', 'Route de Sigonce', 'Forcalquier', '04300', '04 92 75 20 75', 'contact@refuge-forcalquier.fr'),
('SPA Toulouse', '235 avenue de Fronton', 'Toulouse', '31200', '05 61 47 48 49', 'contact@spa-toulouse.fr'),
('Refuge du Quercy', 'Lieu-dit Labastide', 'Cahors', '46000', '05 65 35 36 37', 'contact@refuge-quercy.fr'),
('SPA Montpellier', '1000 avenue de la Pompignane', 'Montpellier', '34000', '04 67 65 50 97', 'contact@spa-montpellier.fr'),
('Refuge des Félins', '42 rue de la Paix', 'Dijon', '21000', '03 80 50 51 52', 'contact@refuge-felins.fr');

-- ========================================
-- 4. INSERTION DES ANIMAUX (JSON Original)
-- ========================================

INSERT INTO animals (name, age, breed_id, gender, description, imageUrl, size, good_with_kids, good_with_animals, arrival_date, shelter_id) VALUES
('Charlie', 5, 1, 'male', 'Charlie est un petit chien calme et affectueux qui adore les balades tranquilles et les caresses sur le canapé.', '/images/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg', 'small', 'yes', 'yes', '2024-01-15', 1),
('Mia', 2, 2, 'female', 'Mia est une boule de tendresse curieuse et joueuse, toujours prête à ronronner près de vous.', '/images/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg', 'small', 'yes', 'no', '2024-02-20', 2),
('Coco', 1, 3, 'male', 'Coco est un petit lapin plein d''énergie, très doux et parfait pour un foyer aimant et paisible.', '/images/chan-swan-NKyl19P5IHg-unsplash.jpg', 'small', 'yes', 'yes', '2024-03-10', 3),
('Rex', 4, 4, 'male', 'Rex est un chien loyal et majestueux, idéal pour une personne douce et patiente qui aime les câlins silencieux.', '/images/alan-king-KZv7w34tluA-unsplash.jpg', 'medium', 'no', 'no', '2023-11-05', 4),
('Luna', 3, 5, 'female', 'Luna adore les coins ensoleillés et les siestes à vos côtés. Elle vous offrira tout l''amour d''un regard félin.', '/images/jae-park-7GX5aICb5i4-unsplash.jpg', 'small', 'yes', 'yes', '2024-01-08', 5),
('Biscuit', 3, 6, 'male', 'Biscuit est tout petit mais plein de vie ! Il aime les légumes croquants et les instants de douceur en famille.', '/images/yosei-g-OVgE3m4MHKM-unsplash.jpg', 'small', 'yes', 'yes', '2024-04-01', 6),
('Rio', 5, 7, 'male', 'Rio est discret, mignon comme tout, et adore explorer les petits coins de la maison avec délicatesse.', '/images/melanie-kreutz-IFnknR2Mv5o-unsplash.jpg', 'small', 'yes', 'yes', '2024-03-25', 7),
('Ruby', 2, 8, 'female', 'Ruby est une boule de neige pleine d''amour ! Elle adore les promenades et les câlins par temps frais.', '/images/peri-stojnic-5Vr_RVPfbMI-unsplash.jpg', 'large', 'yes', 'yes', '2024-02-01', 3);

-- ========================================
-- 5. INSERTION DES INFORMATIONS MÉDICALES
-- ========================================

INSERT INTO medicals_infos (vaccinated, sterilized, microshipped, last_checkup, medical_notes, animal_id) VALUES
(TRUE, TRUE, TRUE, '2024-02-10', 'Léger souffle au cœur, suivi annuel recommandé', 1),
(TRUE, FALSE, TRUE, '2024-03-05', NULL, 2),
(TRUE, TRUE, FALSE, '2024-03-12', NULL, 3),
(TRUE, TRUE, TRUE, '2024-01-20', 'Arthrose légère, éviter les efforts intenses', 4),
(TRUE, TRUE, TRUE, '2024-02-15', NULL, 5),
(FALSE, FALSE, FALSE, '2024-04-02', 'Jeune, en bonne santé', 6),
(TRUE, FALSE, FALSE, '2024-03-28', NULL, 7),
(TRUE, TRUE, TRUE, '2024-02-28', 'Excellente santé, pelage à entretenir régulièrement', 8);

-- ========================================
-- 6. ANIMAUX SUPPLÉMENTAIRES GÉNÉRÉS
-- ========================================

INSERT INTO animals (name, age, breed_id, gender, description, imageUrl, size, good_with_kids, good_with_animals, arrival_date, shelter_id) VALUES
('Max', 3, 9, 'male', 'Max est un Golden Retriever joyeux et énergique, parfait pour une famille active qui aime les aventures en plein air.', '/images/dog-golden-01.jpg', 'large', 'yes', 'yes', '2024-01-20', 8),
('Bella', 4, 10, 'female', 'Bella est une Berger Allemand intelligente et protectrice, idéale pour quelqu''un cherchant un compagnon loyal.', '/images/dog-shepherd-01.jpg', 'large', 'yes', 'no', '2024-02-15', 9),
('Oscar', 2, 11, 'male', 'Oscar est un Beagle curieux et affectueux, toujours prêt à suivre une piste intéressante lors des promenades.', '/images/dog-beagle-01.jpg', 'medium', 'yes', 'yes', '2024-03-01', 10),
('Simba', 5, 12, 'male', 'Simba est un Maine Coon majestueux avec un caractère doux, parfait pour les amoureux des grands chats.', '/images/cat-maine-01.jpg', 'medium', 'yes', 'yes', '2024-01-12', 11),
('Princesse', 3, 13, 'female', 'Princesse est une Persane élégante qui apprécie le calme et les longues séances de toilettage.', '/images/cat-persian-01.jpg', 'small', 'yes', 'no', '2024-02-25', 12),
('Milo', 1, 14, 'male', 'Milo est un Siamois bavard et sociable qui adore être au centre de l''attention.', '/images/cat-siamese-01.jpg', 'small', 'yes', 'yes', '2024-03-18', 13),
('Caramel', 2, 15, 'female', 'Caramel est une Lapin Bélier adorable avec de longues oreilles tombantes et un tempérament très doux.', '/images/rabbit-lop-01.jpg', 'small', 'yes', 'yes', '2024-02-08', 14),
('Flocon', 1, 16, 'male', 'Flocon est un Lapin Angora tout doux avec une fourrure soyeuse qui nécessite un entretien régulier.', '/images/rabbit-angora-01.jpg', 'small', 'yes', 'yes', '2024-03-22', 15),
('Noisette', 1, 17, 'female', 'Noisette est un Hamster Doré actif qui adore courir dans sa roue et stocker des graines dans ses joues.', '/images/hamster-gold-01.jpg', 'small', 'yes', 'undefined', '2024-04-05', 8),
('Pixel', 8, 18, 'male', 'Pixel est un petit Hamster Russe espiègle avec une bande noire caractéristique sur le dos.', '/images/hamster-russian-01.jpg', 'small', 'yes', 'undefined', '2024-04-10', 9),
('Dusty', 2, 19, 'male', 'Dusty est un Chinchilla Gris très doux qui adore les bains de sable et sauter partout.', '/images/chinchilla-01.jpg', 'small', 'no', 'undefined', '2024-03-15', 10),
('Chips', 1, 20, 'male', 'Chips est une Gerbille de Mongolie curieuse qui creuse des tunnels impressionnants dans sa litière.', '/images/gerbil-01.jpg', 'small', 'yes', 'undefined', '2024-04-01', 11),
('Remy', 2, 21, 'male', 'Remy est un Rat Dumbo intelligent avec de grandes oreilles rondes, très affectueux et facile à apprivoiser.', '/images/rat-dumbo-01.jpg', 'small', 'yes', 'yes', '2024-02-18', 12),
('Minnie', 1, 22, 'female', 'Minnie est une Souris Domestique toute mignonne, vive et discrète, parfaite pour un petit espace.', '/images/mouse-01.jpg', 'small', 'yes', 'undefined', '2024-03-30', 13),
('Azur', 3, 23, 'male', 'Azur est une Perruche Ondulée bleue et blanche qui chante joyeusement toute la journée.', '/images/budgie-01.jpg', 'small', 'yes', 'undefined', '2024-02-12', 14);

-- Informations médicales pour les animaux supplémentaires
INSERT INTO medicals_infos (vaccinated, sterilized, microshipped, last_checkup, medical_notes, animal_id) VALUES
(TRUE, TRUE, TRUE, '2024-01-25', NULL, 9),
(TRUE, TRUE, TRUE, '2024-02-20', 'Hanches en bonne santé', 10),
(TRUE, TRUE, TRUE, '2024-03-05', NULL, 11),
(TRUE, TRUE, TRUE, '2024-01-18', 'Pelage à entretenir quotidiennement', 12),
(TRUE, TRUE, TRUE, '2024-03-01', 'Surveillance des yeux et du nez recommandée', 13),
(TRUE, FALSE, TRUE, '2024-03-20', NULL, 14),
(TRUE, TRUE, FALSE, '2024-02-10', NULL, 15),
(TRUE, FALSE, FALSE, '2024-03-25', 'Toilettage régulier nécessaire', 16),
(FALSE, FALSE, FALSE, '2024-04-06', 'Jeune, en bonne santé', 17),
(FALSE, FALSE, FALSE, '2024-04-11', 'Jeune, en bonne santé', 18),
(FALSE, TRUE, FALSE, '2024-03-18', 'Besoin de bains de sable quotidiens', 19),
(FALSE, FALSE, FALSE, '2024-04-02', NULL, 20),
(FALSE, TRUE, FALSE, '2024-02-22', 'Très sociable, manipuler régulièrement', 21),
(FALSE, FALSE, FALSE, '2024-04-01', NULL, 22),
(FALSE, FALSE, FALSE, '2024-02-15', 'Ailes taillées pour la sécurité', 23);

-- ========================================
-- Vérification des données insérées
-- ========================================

SELECT 'Types d''animaux:' as Info, COUNT(*) as Total FROM types
UNION ALL
SELECT 'Races:', COUNT(*) FROM breeds
UNION ALL
SELECT 'Refuges:', COUNT(*) FROM shelters
UNION ALL
SELECT 'Animaux:', COUNT(*) FROM animals
UNION ALL
SELECT 'Infos médicales:', COUNT(*) FROM medicals_infos;