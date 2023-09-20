-- Инициализируем базу данный для ussurvescom

-- Таблица для новостей
CREATE TABLE `news` 
(
    `id` int NOT NULL auto_increment PRIMARY KEY,
    `title` text NOT NULL,
    `description` text DEFAULT NULL,
    `date` text DEFAULT NULL,
    `logo` text DEFAULT NULL,
    `img_id` int DEFAULT NULL
);

-- Инициализация таблицы services
CREATE TABLE `services`
(
    `id` int NOT NULL auto_increment PRIMARY KEY,
    `title` text NOT NULL,
    `description` text DEFAULT NULL,
    `price` int DEFAULT NULL
);

-- Инициализация таблицы category
CREATE TABLE `category`
(
    `id` int NOT NULL auto_increment PRIMARY KEY,
    `title` text NOT NULL
);

-- Инициализация таблицы product
CREATE TABLE `product` 
(
    `category_id` int NOT NULL,
    `title` int NOT NULL,
    `description` text NOT NULL,
    `price` int DEFAULT NULL,
    `img_id` int DEFAULT NULL 
    -- img_id служит для создания отношений между таблицей imges и product
);

-- Инициализация таблицы с сылками на картинки img
CREATE TABLE `imges` 
(
    `id` int NOT NULL auto_increment PRIMARY KEY,
    `img_link` text NOT NULL,
    `product_id` int NOT NULL 
);

