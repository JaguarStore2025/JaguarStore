const partsData = {
   CPUs: [
    { id: 'cpu_1', name: 'new - I3 10105F', price: 3700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2010105F.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 4, Threads: 8 }, condition: 'new', rating: 4.5, featured: true, bestSeller: false },
    { id: 'cpu_2', name: 'new - I3 12100F Box', price: 3600, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2012100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'new', rating: 5, featured: true, bestSeller: true },
    { id: 'cpu_3', name: 'new - I3 12100F Tray', price: 3300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2012100F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
    { id: 'cpu_4', name: 'new - I3 13100F Box', price: 5300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2013100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'new', rating: 4.8, featured: false, bestSeller: false },
    { id: 'cpu_5', name: 'new - I3 14100F Box', price: 5200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2014100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
    { id: 'cpu_6', name: 'new - I5 10400F Tray', price: 4900, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2010400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
    { id: 'cpu_7', name: 'new - I5 11400F Box', price: 5200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2011400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
    { id: 'cpu_8', name: 'new - I5 12400F Box', price: 6000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2012400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 6, Threads: 12 }, condition: 'new', rating: 5, featured: true, bestSeller: true },
    { id: 'cpu_9', name: 'new - I5 12400F Tray', price: 5400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2012400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.8, featured: false, bestSeller: false },
    { id: 'cpu_10', name: 'new - Ryzen 5 5600', price: 5400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%205600.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.9, featured: false, bestSeller: true },
    { id: 'cpu_11', name: 'new - Ryzen 5 5600G', price: 5400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%205600%20G.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.8, featured: true, bestSeller: false },
    { id: 'cpu_12', name: 'used - I3 10100F', price: 2200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2010100F.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 4, Threads: 8 }, condition: 'used', rating: 4, featured: false, bestSeller: false },
    { id: 'cpu_13', name: 'used - I3 12100F Box', price: 3500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2012100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'used', rating: 4.5, featured: false, bestSeller: false },
    { id: 'cpu_14', name: 'used - Ryzen 5 5600', price: 5400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%205600.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.9, featured: true, bestSeller: false },
    { id: 'cpu_15', name: 'new - I5 13400F Box', price: 7200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2013400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'new', rating: 4.9, featured: false, bestSeller: false },
    { id: 'cpu_16', name: 'new - I5 13400F Tray', price: 6500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2013400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
    { id: 'cpu_17', name: 'new - I5 14400F Box', price: 7300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2014400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'new', rating: 4.9, featured: false, bestSeller: false },
    { id: 'cpu_18', name: 'new - I5 14400F Tray', price: 7100, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2014400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'new', rating: 4.8, featured: false, bestSeller: false },
    { id: 'cpu_19', name: 'new - Ryzen 3 4100', price: 2700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%203%204100.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 4, Threads: 8 }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
    { id: 'cpu_20', name: 'new - Ryzen 5 4500 Box', price: 3800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%204500%20Box.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
    { id: 'cpu_21', name: 'new - Ryzen 5 5500 Box', price: 4350, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%205500%20Box.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
    { id: 'cpu_22', name: 'new - Ryzen 5 5500 Tray', price: 4150, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%205500%20Tray.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
    { id: 'cpu_23', name: 'new - Ryzen 5 5600 GT Box', price: 6900, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%205600%20GT%20Box.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.9, featured: false, bestSeller: false },
    { id: 'cpu_24', name: 'used - I3 10105F', price: 2200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2010105F.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 4, Threads: 8 }, condition: 'used', rating: 4, featured: false, bestSeller: false },
    { id: 'cpu_25', name: 'used - I3 12100F Tray', price: 3200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2012100F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'used', rating: 4.4, featured: false, bestSeller: false },
    { id: 'cpu_26', name: 'used - I3 13100F Box', price: 4000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2013100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'used', rating: 4.6, featured: false, bestSeller: false },
    { id: 'cpu_27', name: 'used - I5 10400F Tray', price: 4000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2010400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.5, featured: false, bestSeller: false },
    { id: 'cpu_28', name: 'used - I5 11400F Box', price: 4300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2011400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.6, featured: false, bestSeller: false },
    { id: 'cpu_29', name: 'used - I5 12400F Box', price: 5000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2012400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.7, featured: false, bestSeller: false },
    { id: 'cpu_30', name: 'used - I5 12400F Tray', price: 4400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2012400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.5, featured: false, bestSeller: false },
    { id: 'cpu_31', name: 'used - I5 14400F Box', price: 6800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2014400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'used', rating: 4.8, featured: false, bestSeller: false },
    { id: 'cpu_32', name: 'used - I5 14400F Tray', price: 6600, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2014400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'used', rating: 4.7, featured: false, bestSeller: false },
    { id: 'cpu_33', name: 'used - Ryzen 3 3100', price: 1900, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%203%203100.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 4, Threads: 8 }, condition: 'used', rating: 4.2, featured: false, bestSeller: false },
    { id: 'cpu_34', name: 'used - Ryzen 5 4500 Box', price: 3200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%204500%20Box.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.5, featured: false, bestSeller: false },
    { id: 'cpu_35', name: 'used - Ryzen 5 5600 G', price: 5400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%205600%20G.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.8, featured: false, bestSeller: false }
],

   Motherboards: [
    { id: 'mb_1', name: 'ASRock B660M-HDV', price: 3200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/ASRock%20B660M-HDV.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.5 },
    { id: 'mb_2', name: 'ASUS PRIME B450M-A II', price: 2800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/ASUS%20PRIME%20B450M-A%20II.jpg', type: 'AMD', specifications: { Socket: 'AM4', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.4 },
    { id: 'mb_3', name: 'ASUS PRIME B550M-K', price: 3000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/ASUS%20PRIME%20B550M-K.jpg', type: 'AMD', specifications: { Socket: 'AM4', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.6 },
    { id: 'mb_4', name: 'ASUS PRIME H510M-K R2.0', price: 2900, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/ASUS%20PRIME%20H510M-K%20R2.0.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.5 },
    { id: 'mb_5', name: 'ASUS Prime B460', price: 3100, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/ASUS%20Prime%20B460.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.4 },
    { id: 'mb_6', name: 'GIGABYTE H410M S2H', price: 2700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/GIGABYTE%20H410M%20S2H.png', type: 'Intel', specifications: { Socket: 'LGA1200', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.3 },
    { id: 'mb_7', name: 'MSI B550M PRO-VDH WIFI', price: 3400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/MSI%20B550M%20PRO-VDH%20WIFI%20Motherboard.jpg', type: 'AMD', specifications: { Socket: 'AM4', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.7 },
    { id: 'mb_8', name: 'MSI B560-A PRO', price: 3500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/MSI%20B560-A%20PRO.png', type: 'Intel', specifications: { Socket: 'LGA1200', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.6 },
    { id: 'mb_9', name: 'MSI B450M-A PRO MAX II', price: 2800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/MSI%20MOTHERBOARD%20B450M-A%20PRO%20MAX%20II.jpg', type: 'AMD', specifications: { Socket: 'AM4', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.4 },
    { id: 'mb_10', name: 'MSI PRO H610M-E DDR4', price: 3000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/MSI%20PRO%20H610M-E%20DDR4.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.5 }
],

   RAMs: [
    { id: 'ram_1', name: 'new - Kingston FURY Beast RGB 16GB DDR4 3200MT/s', price: 2350, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Kingston%20FURY%20Beast%20RGB%208GB%20DDR4%203200MTs.jpg', specifications: { Capacity: '16GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'new', rating: 4.9, featured: true, bestSeller: true },
    { id: 'ram_2', name: 'new - Crucial 16G DDR4 3200Mhz', price: 1700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Crucial%2016G%20DDR4%203200Mhz.jpg', specifications: { Capacity: '16GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'new', rating: 4.7 },
    { id: 'ram_3', name: 'new - PNY 8GB Performance DDR4 3200MHz', price: 950, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/PNY%208GB%20Performance%20DDR4%203200MHz.jpg', specifications: { Capacity: '8GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'new', rating: 4.2 },
    { id: 'ram_4', name: 'new - TeamGroup T-Force Delta RGB 8GB 3200MHz', price: 1400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/TeamGroup%20T-Force%20Delta%20RGB%208GB%203200MHz.jpg', specifications: { Capacity: '8GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'new', rating: 4.8 },
    { id: 'ram_5', name: 'new - RAM-CRUCIL-8G-DDR4-3200-PC', price: 1000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/RAM-CRUCIL-8G-DDR4-3200-PC.jpg', specifications: { Capacity: '8GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'new', rating: 4.5 },
    { id: 'ram_6', name: 'new - Kingston HyperX Fury DDR4 8GB 3200MHz', price: 1250, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/ingston%20HyperX%20Fury%20DDR4%208GB%203200MHz%20Cl16%20Gaming%20Memory.jpg', specifications: { Capacity: '8GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'new', rating: 4.7 },
    { id: 'ram_7', name: 'new - Kingston FURY Beast RGB 8GB DDR4 3200MT/s', price: 1450, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Kingston%20FURY%20Beast%20RGB%208GB%20DDR4%203200MTs.jpg', specifications: { Capacity: '8GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'new', rating: 4.9 }
],

   Storages: [
    { id: 'sto_1', name: 'new - Lexar NM610PRO 500GB NVMe', price: 1850, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Lexar%20NM610PRO%20500GB%20M.2%20NVMe%20SSD%20%E2%80%93%20PCIe%20Gen3x4%2C%203300MBs%20read%2C%201700MBs%20write%2C%203D%20NAND.jpg', specifications: { Capacity: '500GB', Type: 'NVMe SSD' }, condition: 'new', rating: 4.8, featured: true, bestSeller: true },
    { id: 'sto_2', name: 'used - HDD W&D blue 500g', price: 600, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/HDD%20W%20AND%20D%20500G.jpg', specifications: { Capacity: '500GB', Type: 'HDD' }, condition: 'used', rating: 3.5 },
    { id: 'sto_3', name: 'used - HDD W&D blue 1000g', price: 1200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/HDD%20W%20AND%20D%201000G.jpg', specifications: { Capacity: '1TB', Type: 'HDD' }, condition: 'used', rating: 4 },
    { id: 'sto_4', name: 'new - PNY CS900 250GB SATA III SSD', price: 1000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/PNY%20CS900%20250GB%20SATA%20III%20SSD%20%E2%80%93%202.5%20form%20factor%2C%20up%20to%20535MBs%20read%2C%20500MBs%20write..jpg', specifications: { Capacity: '250GB', Type: 'SATA III SSD' }, condition: 'new', rating: 4.5 },
    { id: 'sto_5', name: 'new - Hikvision Desire P 128GB M.2 NVMe', price: 800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Hikvision%20Desire%20P%20128GB%20M.2%20NVMe%20PCIe%20Gen3x4%20Internal%20SSD.jpg', specifications: { Capacity: '128GB', Type: 'M.2 NVMe' }, condition: 'new', rating: 4.3 },
    { id: 'sto_6', name: 'new - Redragon Dragon Knight RM113 256GB SATA III SSD', price: 975, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Redragon%20Dragon%20Knight%20RM113%20256GB%202.5%20SATA%20III%20SSD%20with%20up%20to%20500MBs%20read%2C%20400MBs%20write.jpg', specifications: { Capacity: '256GB', Type: 'SATA III SSD' }, condition: 'new', rating: 4.6 },
    { id: 'sto_7', name: 'new - TeamGroup CX2 256GB SATA SSD', price: 950, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/TeamGroup%20CX2%20256GB%20SATA%202.5%20Read%20Speed%20520%20MBs%20Write%20Speed%20430%20MBs.jpg', specifications: { Capacity: '256GB', Type: 'SATA III SSD' }, condition: 'new', rating: 4.5 },
    { id: 'sto_8', name: 'new - HikVision E100 256GB SATA SSD', price: 1000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/HikVision%20E100%20256GB%202.5%20SATA%20SSD%20with%20up%20to%20550MB%20s%20read%2C%20500MBs%20write%20speeds%203D%20NAND.jpg', specifications: { Capacity: '256GB', Type: 'SATA III SSD' }, condition: 'new', rating: 4.6 },
    { id: 'sto_9', name: 'new - Crucial BX500 500GB SSD', price: 1800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Crucial%20BX500%20500GB%20SSD%2C%20SATA%206Gbs%2C%202.5%20(7mm)%2C%20550MBs%20read%2C%20500MBs%20write%2C%20120TBW.jpg', specifications: { Capacity: '500GB', Type: 'SATA III SSD' }, condition: 'new', rating: 4.7 }
],

   GPUs: [
    { id: 'gpu_1', name: 'used - Nvidia GTX 1660 Super 6G', price: 7800, img: 'https://via.placeholder.com/600x400?text=GTX+1660+Super', type: 'Nvidia', specifications: { VRAM: '6GB' }, condition: 'used', rating: 4.9, featured: true, bestSeller: true },
    { id: 'gpu_2', name: 'new - Nvidia RTX 3050 6G', price: 9400, img: 'https://via.placeholder.com/600x400?text=RTX+3050+new', type: 'Nvidia', specifications: { VRAM: '6GB' }, condition: 'new', rating: 5, featured: false, bestSeller: true },
    { id: 'gpu_3', name: 'used - AMD RX 580 8G', price: 3700, img: 'https://via.placeholder.com/600x400?text=AMD+RX+580', type: 'AMD', specifications: { VRAM: '8GB' }, condition: 'used', rating: 4 },
    { id: 'gpu_4', name: 'used - Nvidia GTX 1070 8G', price: 7800, img: 'https://via.placeholder.com/600x400?text=GTX+1070', type: 'Nvidia', specifications: { VRAM: '8GB' }, condition: 'used', rating: 4.5 },
    { id: 'gpu_5', name: 'used - AMD RX 580 4G', price: 3200, img: 'https://via.placeholder.com/600x400?text=AMD+RX+580+4G', type: 'AMD', specifications: { VRAM: '4GB' }, condition: 'used', rating: 3.8 },
    { id: 'gpu_6', name: 'used - AMD RX 590 8G', price: 4700, img: 'https://via.placeholder.com/600x400?text=AMD+RX+590+8G', type: 'AMD', specifications: { VRAM: '8GB' }, condition: 'used', rating: 4.2 },
    { id: 'gpu_7', name: 'used - AMD RX 5500 XT 8G', price: 6300, img: 'https://via.placeholder.com/600x400?text=AMD+RX+5500XT', type: 'AMD', specifications: { VRAM: '8GB' }, condition: 'used', rating: 4.5 },
    { id: 'gpu_8', name: 'used - AMD RX 5600 XT 6G', price: 7800, img: 'https://via.placeholder.com/600x400?text=AMD+RX+5600XT', type: 'AMD', specifications: { VRAM: '6GB' }, condition: 'used', rating: 4.7 },
    { id: 'gpu_9', name: 'used - AMD RX 5700 XT 8G', price: 9400, img: 'https://via.placeholder.com/600x400?text=AMD+RX+5700XT', type: 'AMD', specifications: { VRAM: '8GB' }, condition: 'used', rating: 4.8 },
    { id: 'gpu_10', name: 'used - Nvidia GTX 1060 3G', price: 4200, img: 'https://via.placeholder.com/600x400?text=GTX+1060+3G', type: 'Nvidia', specifications: { VRAM: '3GB' }, condition: 'used', rating: 4.1 },
    { id: 'gpu_11', name: 'used - Nvidia GTX 1060 6G', price: 5800, img: 'https://via.placeholder.com/600x400?text=GTX+1060+6G', type: 'Nvidia', specifications: { VRAM: '6GB' }, condition: 'used', rating: 4.4 },
    { id: 'gpu_12', name: 'used - Nvidia GTX 1080 8G', price: 8900, img: 'https://via.placeholder.com/600x400?text=GTX+1080', type: 'Nvidia', specifications: { VRAM: '8GB' }, condition: 'used', rating: 4.6 },
    { id: 'gpu_13', name: 'used - Nvidia GTX 1080ti 11G', price: 9400, img: 'https://via.placeholder.com/600x400?text=GTX+1080ti', type: 'Nvidia', specifications: { VRAM: '11GB' }, condition: 'used', rating: 4.9 },
    { id: 'gpu_14', name: 'used - Nvidia GTX 2060 6G', price: 9400, img: 'https://via.placeholder.com/600x400?text=RTX+2060', type: 'Nvidia', specifications: { VRAM: '6GB' }, condition: 'used', rating: 4.8 },
    { id: 'gpu_15', name: 'used - Nvidia RTX 3050 6G', price: 8700, img: 'https://via.placeholder.com/600x400?text=RTX+3050+used', type: 'Nvidia', specifications: { VRAM: '6GB' }, condition: 'used', rating: 4.8 }
],

   CasePSUs: [
    { id: 'case_1', name: 'new - GAMDIAS AURA GC2 ELITE + AURA GP750 750W', price: 3500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/GAMDIAS%20AURA%20GC2%20ELITE%20Mid-Tower%20Case%20And%20AURA%20GP750%20750W%20Power%20Supply.jpg', specifications: { Case: 'Mid-Tower', PSU_Watts: '750W' }, condition: 'new', rating: 4.6 },
    { id: 'case_2', name: 'new - XIGMATEK Master X II + X-Power 600W', price: 3500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/XIGMATEK%20Master%20X%20II%20GAMING%20SUPER-TOWER%20CASE%20ARGB%204%20Fans%20PLUS%20POWER%20SUPPLY%20X-Power%20600W%2080%2BWhite.jpg', specifications: { Case: 'Super-Tower', PSU_Watts: '600W' }, condition: 'new', rating: 4.8 },
    { id: 'case_3', name: 'new - Xigmatek Sky II + X-Power 600W', price: 3000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Xigmatek%20Sky%20II%20FIXEDRGB%2B%20X-Power%20600W%2080%2B%20White%20Mid%20Tower%20Case.jpg', specifications: { Case: 'Mid-Tower', PSU_Watts: '600W' }, condition: 'new', rating: 4.6 },
    { id: 'case_4', name: 'Aerocool Designer ARGB + LUX 550W', price: 3000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Aerocool%20Designer%20ARGB%20PC%20MID%20TOWER%20CASE%20%2B%20LUX%20550W%20POWER%20SUPPLY%2080%2BPLUS%20BRONZE%20ACCX-ES05002.11.jpg', specifications: { Case: 'Mid-Tower', PSU_Watts: '550W' }, condition: 'new', rating: 4.5 }
]


const allProducts = Object.values(partsData).flat();
const featuredProducts = allProducts.filter(p => p.featured);
const bestSellers = allProducts.filter(p => p.bestSeller);

const allProductsGrid = document.getElementById('all-products-grid');
const featuredProductsGrid = document.getElementById('featured-products');
const bestSellersGrid = document.getElementById('best-sellers-products');

const categoryFilter = document.getElementById('category-filter');
const conditionFilter = document.getElementById('condition-filter');
const brandFilter = document.getElementById('brand-filter');
const sort = document.getElementById('sort');

const cartBtn = document.getElementById('cart-btn');
const cartPanel = document.getElementById('cart');
const cartItemsEl = document.getElementById('cart-items');
const cartCountEl = document.getElementById('cart-count');
const cartTotalEl = document.getElementById('cart-total');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout');
const clearCartBtn = document.getElementById('clear-cart');

const cpuSelect = document.getElementById('cpu-select');
const mbSelect = document.getElementById('mb-select');
const ramSelect = document.getElementById('ram-select');
const storageSelect = document.getElementById('storage-select');
const gpuSelect = document.getElementById('gpu-select');
const caseSelect = document.getElementById('case-select');
const customTotal = document.getElementById('custom-total');
const addCustomBtn = document.getElementById('add-custom-to-cart');
const resetCustomBtn = document.getElementById('reset-custom');
const compatEl = document.getElementById('compat');

const checkoutModal = document.getElementById('checkout-modal');
const placeOrderBtn = document.getElementById('place-order');
const cancelOrderBtn = document.getElementById('cancel-order');
const exportOrdersBtn = document.getElementById('export-orders');

const fyear = document.getElementById('fyear');
fyear.textContent = new Date().getFullYear();
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');

const wishlistBtn = document.getElementById('wishlist-btn');
const wishlistPanel = document.getElementById('wishlist');
const closeWishlistBtn = document.getElementById('close-wishlist');
const wishlistItemsEl = document.getElementById('wishlist-items');
const wishlistCountEl = document.getElementById('wishlist-count');
const compareBtn = document.getElementById('compare-btn');
const compareModal = document.getElementById('compare-modal');
const compareListEl = document.getElementById('compare-list');
const closeCompareBtn = document.getElementById('close-compare');
const detailsModal = document.getElementById('details-modal');
const detailsContentEl = document.getElementById('details-content');
const closeDetailsBtn = document.getElementById('close-details');
const themeToggle = document.getElementById('theme-toggle');

const carouselTrack = document.getElementById('carousel-track');
const carouselNext = document.getElementById('carousel-next');
const carouselPrev = document.getElementById('carousel-prev');
let currentSlide = 0;

const faqItems = document.querySelectorAll('.faq-item');

const egCurrency = n => `${Number(n).toLocaleString('ar-EG')} ج.م`;

let CART = JSON.parse(localStorage.getItem('jcart') || '[]');
let WISHLIST = JSON.parse(localStorage.getItem('jwishlist') || '[]');
let COMPARE_LIST = [];

// --- Theme Toggle ---
function updateTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
}
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    updateTheme(savedTheme);
}
initTheme();
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    updateTheme(currentTheme);
});

// --- Carousel Functions ---
function updateCarousel() {
    const slideWidth = carouselTrack.firstElementChild.offsetWidth;
    carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % carouselTrack.children.length;
    updateCarousel();
}
function prevSlide() {
    currentSlide = (currentSlide - 1 + carouselTrack.children.length) % carouselTrack.children.length;
    updateCarousel();
}
carouselNext.addEventListener('click', nextSlide);
carouselPrev.addEventListener('click', prevSlide);
window.addEventListener('resize', updateCarousel);
setInterval(nextSlide, 5000); // Auto-slide every 5 seconds

// --- FAQ Functions ---
faqItems.forEach(item => {
    item.querySelector('button').addEventListener('click', () => {
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');
        const isOpen = content.classList.contains('active');

        faqItems.forEach(i => {
            i.querySelector('.faq-content').classList.remove('active');
            i.querySelector('.faq-content').classList.add('hidden');
            i.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
        });

        if (!isOpen) {
            content.classList.remove('hidden');
            content.classList.add('active');
            icon.style.transform = 'rotate(180deg)';
        }
    });
});

// --- Stars Rating ---
const getStars = (rating) => {
    const fullStars = '★'.repeat(Math.floor(rating));
    const halfStar = rating % 1 >= 0.5 ? '½' : '';
    const emptyStars = '☆'.repeat(5 - Math.ceil(rating));
    return `${fullStars}${halfStar}${emptyStars}`;
};

// --- Cart Functions ---
function saveCart() { localStorage.setItem('jcart', JSON.stringify(CART)); renderCart(); }
function addToCart(item) { const found = CART.find(i => i.id === item.id); if (found) found.qty += item.qty; else CART.push(item); saveCart(); }
function removeFromCart(id) { CART = CART.filter(i => i.id !== id); saveCart(); }
function changeQty(id, qty) { const it = CART.find(i => i.id === id); if (it) it.qty = Math.max(1, qty); saveCart(); }
function renderCart() {
    cartItemsEl.innerHTML = '';
    if (CART.length === 0) {
        cartItemsEl.innerHTML = '<div class="text-text-muted text-center py-8">السلة فارغة</div>';
        cartCountEl.textContent = 0;
        cartTotalEl.textContent = egCurrency(0);
        return;
    }
    let total = 0;
    CART.forEach(it => {
        total += it.price * it.qty;
        const row = document.createElement('div');
        row.className = 'py-3 flex items-center gap-3';
        row.innerHTML = `<div class="flex-1"><div class="font-semibold">${it.name}</div><div class="text-sm text-text-muted">${egCurrency(it.price)} × ${it.qty}</div></div><div class="flex items-center gap-2"><button class="px-2 py-1 bg-slate-700 rounded transition-colors hover:bg-slate-600" data-action="dec" data-id="${it.id}">-</button><div class="w-8 text-center">${it.qty}</div><button class="px-2 py-1 bg-slate-700 rounded hover:bg-slate-600 transition-colors" data-action="inc" data-id="${it.id}">+</button><button class="px-2 py-1 text-primary-blue hover:text-red-400 transition-colors" data-action="del" data-id="${it.id}">حذف</button></div>`;
        cartItemsEl.appendChild(row);
    });
    cartCountEl.textContent = CART.reduce((s, i) => s + i.qty, 0);
    cartTotalEl.textContent = egCurrency(total);
}
// --- Wishlist Functions ---
function saveWishlist() { localStorage.setItem('jwishlist', JSON.stringify(WISHLIST)); renderWishlist(); }
function addToWishlist(item) { if (!WISHLIST.find(i => i.id === item.id)) WISHLIST.push(item); saveWishlist(); }
function removeFromWishlist(id) { WISHLIST = WISHLIST.filter(i => i.id !== id); saveWishlist(); }
function renderWishlist() {
    wishlistItemsEl.innerHTML = '';
    if (WISHLIST.length === 0) {
        wishlistItemsEl.innerHTML = '<div class="text-text-muted text-center py-8">قائمة الرغبات فارغة</div>';
        wishlistCountEl.textContent = 0;
        return;
    }
    WISHLIST.forEach(it => {
        const row = document.createElement('div');
        row.className = 'py-3 flex items-center gap-3';
        row.innerHTML = `<div class="flex-1"><div class="font-semibold">${it.name}</div><div class="text-sm text-text-muted">${egCurrency(it.price)}</div></div><div class="flex items-center gap-2"><button class="px-2 py-1 rounded bg-primary-blue text-black font-semibold hover:bg-sky-400 transition-colors" data-action="add-to-cart" data-id="${it.id}">أضف للعربة</button><button class="px-2 py-1 text-red-400" data-action="del" data-id="${it.id}">حذف</button></div>`;
        wishlistItemsEl.appendChild(row);
    });
    wishlistCountEl.textContent = WISHLIST.length;
}
// --- Comparison Functions ---
function addToCompare(item) {
    if (COMPARE_LIST.length < 2 && !COMPARE_LIST.find(i => i.id === item.id)) {
        COMPARE_LIST.push(item);
        alert(`تم إضافة "${item.name}" للمقارنة. (${COMPARE_LIST.length}/2)`);
    } else if (COMPARE_LIST.length >= 2) {
        alert('لا يمكن مقارنة أكثر من منتجين.');
    }
}
function renderCompare() {
    compareListEl.innerHTML = '';
    if (COMPARE_LIST.length < 2) {
        compareListEl.innerHTML = `<div class="text-text-muted text-center py-8 col-span-2">اختر منتجين للمقارنة.</div>`;
        return;
    }
    COMPARE_LIST.forEach(item => {
        const card = document.createElement('div');
        card.className = 'pcard p-4 rounded-xl';
        let specsHtml = '';
        if (item.specifications) {
            specsHtml = `<ul class="list-disc list-inside mt-3 text-sm text-text-muted">`
            for (const [key, value] of Object.entries(item.specifications)) {
                specsHtml += `<li><span class="font-semibold">${key}:</span> ${value}</li>`;
            }
            specsHtml += `</ul>`;
        }
        card.innerHTML = `<img src="${item.img}" class="w-full h-32 object-contain rounded mb-2"><h4 class="font-bold">${item.name}</h4><p class="text-primary-blue mt-1 font-semibold">${egCurrency(item.price)}</p>${specsHtml}`;
        compareListEl.appendChild(card);
    });
}
// --- Product Details Modal ---
function showProductDetails(product) {
    let specsHtml = '';
    if (product.specifications) {
        specsHtml = `<ul class="list-disc list-inside mt-3 text-sm text-text-muted">`
        for (const [key, value] of Object.entries(product.specifications)) {
            specsHtml += `<li><span class="font-semibold">${key}:</span> ${value}</li>`;
        }
        specsHtml += `</ul>`;
    }
    detailsContentEl.innerHTML = `
        <img src="${product.img}" class="w-full h-64 object-contain rounded-md mb-4">
        <h3 class="text-2xl font-bold">${product.name}</h3>
        <p class="text-primary-blue text-xl font-bold mt-2">${egCurrency(product.price)}</p>
        <p class="mt-4 text-text-muted">${product.description || 'لا يوجد وصف متاح لهذا المنتج.'}</p>
        <div class="mt-2 text-yellow-400 text-lg">
            ${getStars(product.rating)}
            <span class="text-sm text-text-muted">(${product.rating})</span>
        </div>
        <h4 class="font-bold mt-4">المواصفات:</h4>
        ${specsHtml}
    `;
    detailsModal.style.display = 'flex';
    detailsModal.classList.add('fade-in');
}
// --- Render products grid ---
function renderGrid(products, gridElement) {
    gridElement.innerHTML = '';
    if (products.length === 0) {
        document.getElementById('no-results').classList.remove('hidden');
        return;
    } else {
        document.getElementById('no-results').classList.add('hidden');
    }
    const frag = document.createDocumentFragment();
    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'pcard p-4 rounded-xl fade-in';
        card.innerHTML = `
            <div class="relative">
                <img src="${p.img}" alt="${p.name}" class="w-full h-40 object-contain rounded-md mb-3" loading="lazy">
                <div class="absolute top-3 left-3 badge px-3 py-1 text-sm">${p.type || p.category || p.cat || ''}</div>
                <div class="absolute top-3 right-3 text-sm font-semibold px-2 py-1 rounded-full ${p.condition === 'new' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-slate-900'}">
                    ${p.condition === 'new' ? 'جديد' : 'مستعمل'}
                </div>
            </div>
            <div class="flex flex-col justify-between items-start gap-3">
                <div>
                    <div class="font-bold">${p.name}</div>
                    <div class="text-sm text-text-muted mt-1">${egCurrency(p.price)}</div>
                    <div class="text-yellow-400 text-sm mt-1">
                        ${getStars(p.rating)}
                    </div>
                </div>
                <div class="flex flex-col gap-2 w-full">
                    <button data-id="${p.id}" class="add-btn px-3 py-2 rounded bg-primary-blue text-slate-900 font-semibold transition-colors hover:bg-sky-400">أضف للعربة</button>
                    <button data-id="${p.id}" class="details-btn text-sm bg-white/5 px-3 py-2 rounded hover:bg-white/10 transition-colors">تفاصيل</button>
                    <button data-id="${p.id}" class="wishlist-add-btn text-sm bg-white/5 px-3 py-2 rounded hover:bg-white/10 transition-colors">قائمة الرغبات</button>
                    <button data-id="${p.id}" class="compare-add-btn text-sm bg-white/5 px-3 py-2 rounded hover:bg-white/10 transition-colors">مقارنة</button>
                </div>
            </div>
        `;
        frag.appendChild(card);
    });
    gridElement.appendChild(frag);
}

function applyFiltersAndRender() {
    let items = allProducts;
    const selectedCategory = categoryFilter.value;
    const selectedCondition = conditionFilter.value;
    const selectedBrand = brandFilter.value;

    if (selectedCategory !== 'All') {
        const cat = Object.keys(partsData).find(key => key === selectedCategory);
        items = partsData[cat];
    }
    if (selectedCondition !== 'All') {
        items = items.filter(item => item.condition === selectedCondition);
    }
    if (selectedBrand !== 'All') {
        items = items.filter(item => item.type === selectedBrand);
    }
    
    // sorting
    const sortValue = sort.value;
    if (sortValue === 'price-asc') items.sort((a, b) => a.price - b.price);
    if (sortValue === 'price-desc') items.sort((a, b) => b.price - a.price);
    if (sortValue === 'name-asc') items.sort((a, b) => a.name.localeCompare(b.name));
    if (sortValue === 'name-desc') items.sort((a, b) => b.name.localeCompare(a.name));

    renderGrid(items, allProductsGrid);
}

// --- Custom Build Logic ---
function populateSelect(el, cat) {
    el.innerHTML = '<option value="0">اختر...</option>';
    partsData[cat].forEach(p => {
        const o = document.createElement('option');
        o.value = p.price;
        o.textContent = `${p.name} — ${egCurrency(p.price)}`;
        o.setAttribute('data-id', p.id);
        el.appendChild(o);
    });
    el.addEventListener('change', updateCustomTotal);
}
function updateCustomTotal() {
    const sels = [cpuSelect, mbSelect, ramSelect, storageSelect, gpuSelect, caseSelect];
    let t = 0;
    sels.forEach(s => t += parseFloat(s.value) || 0);
    customTotal.textContent = egCurrency(t);
    checkCompatibility();
}
function checkCompatibility() {
    const cpuId = cpuSelect.options[cpuSelect.selectedIndex]?.dataset.id;
    const mbId = mbSelect.options[mbSelect.selectedIndex]?.dataset.id;
    const ramId = ramSelect.options[ramSelect.selectedIndex]?.dataset.id;

    const cpu = allProducts.find(p => p.id === cpuId);
    const mb = allProducts.find(p => p.id === mbId);
    const ram = allProducts.find(p => p.id === ramId);

    let msg = '';
    if (cpu && mb) {
        if (cpu.specifications.Socket !== mb.specifications.Socket) {
            msg = `تحذير: المعالج واللوحة الأم غير متوافقين. المعالج يحتاج إلى سوكيت ${cpu.specifications.Socket} واللوحة الأم تدعم ${mb.specifications.Socket}.`;
        }
    }
    if (mb && ram) {
        if (mb.specifications.RAM_Type && ram.specifications.Type && mb.specifications.RAM_Type !== ram.specifications.Type) {
            msg += `<br>تحذير: الذاكرة (RAM) غير متوافقة مع اللوحة الأم. اللوحة تدعم ${mb.specifications.RAM_Type} والذاكرة من نوع ${ram.specifications.Type}.`;
        }
    }
    compatEl.innerHTML = msg ? `<div class="compat-warning">${msg}</div>` : '';
}

// --- Open/Close Panels ---
function openCart() { cartPanel.style.transform = 'translateX(0)'; }
function closeCart() { cartPanel.style.transform = 'translateX(110%)'; }
function openWishlist() { wishlistPanel.style.transform = 'translateX(0)'; }
function closeWishlist() { wishlistPanel.style.transform = 'translateX(110%)'; }
function openCompare() { compareModal.style.display = 'flex'; compareModal.classList.add('fade-in'); }
function closeCompare() { compareModal.style.display = 'none'; }
function closeDetails() { detailsModal.style.display = 'none'; }

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    renderGrid(featuredProducts, featuredProductsGrid);
    renderGrid(bestSellers, bestSellersGrid);
    applyFiltersAndRender();
    renderCart();
    renderWishlist();
    populateSelect(cpuSelect, 'CPUs');
    populateSelect(mbSelect, 'Motherboards');
    populateSelect(ramSelect, 'RAMs');
    populateSelect(storageSelect, 'Storages');
    populateSelect(gpuSelect, 'GPUs');
    populateSelect(caseSelect, 'CasePSUs');
});

categoryFilter.addEventListener('change', applyFiltersAndRender);
conditionFilter.addEventListener('change', applyFiltersAndRender);
brandFilter.addEventListener('change', applyFiltersAndRender);
sort.addEventListener('change', applyFiltersAndRender);

cartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
wishlistBtn.addEventListener('click', openWishlist);
closeWishlistBtn.addEventListener('click', closeWishlist);
compareBtn.addEventListener('click', () => { renderCompare(); openCompare(); });
closeCompareBtn.addEventListener('click', closeCompare);
closeDetailsBtn.addEventListener('click', closeDetails);
burger.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });

document.addEventListener('click', e => {
    if (e.target.closest('.add-btn')) {
        const id = e.target.closest('.add-btn').dataset.id;
        const p = allProducts.find(x => x.id === id);
        if (p) addToCart({ id: p.id, name: p.name, price: p.price, qty: 1 });
        openCart();
    }
    if (e.target.closest('.details-btn')) {
        const id = e.target.closest('.details-btn').dataset.id;
        const p = allProducts.find(x => x.id === id);
        if (p) showProductDetails(p);
    }
    if (e.target.closest('.wishlist-add-btn')) {
        const id = e.target.closest('.wishlist-add-btn').dataset.id;
        const p = allProducts.find(x => x.id === id);
        if (p) {
            addToWishlist(p);
            openWishlist();
        }
    }
    if (e.target.closest('.compare-add-btn')) {
        const id = e.target.closest('.compare-add-btn').dataset.id;
        const p = allProducts.find(x => x.id === id);
        if (p) addToCompare(p);
    }
    if (e.target.closest('#wishlist-items [data-action="add-to-cart"]')) {
        const id = e.target.closest('[data-action="add-to-cart"]').dataset.id;
        const p = allProducts.find(x => x.id === id);
        if (p) {
            addToCart({ id: p.id, name: p.name, price: p.price, qty: 1 });
            removeFromWishlist(id);
            openCart();
        }
    }
    if (e.target.closest('#wishlist-items [data-action="del"]')) {
        const id = e.target.closest('[data-action="del"]').dataset.id;
        removeFromWishlist(id);
    }
});

cartItemsEl.addEventListener('click', e => {
    const action = e.target.dataset.action;
    const id = e.target.dataset.id;
    if (action === 'del') removeFromCart(id);
    else if (action === 'inc') changeQty(id, (parseInt(e.target.previousElementSibling.textContent) || 0) + 1);
    else if (action === 'dec') changeQty(id, (parseInt(e.target.nextElementSibling.textContent) || 0) - 1);
});

const prebuiltButtons = document.querySelectorAll('.add-build-btn');
prebuiltButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const name = btn.dataset.name;
        const price = parseFloat(btn.dataset.price);
        addToCart({ id: 'build_' + Date.now(), name, price, qty: 1 });
        openCart();
    });
});

addCustomBtn.addEventListener('click', () => {
    const selectedParts = [cpuSelect, mbSelect, ramSelect, storageSelect, gpuSelect, caseSelect].map(select => {
        const opt = select.options[select.selectedIndex];
        return { name: opt.textContent, price: parseFloat(opt.value) };
    }).filter(p => p.price > 0);
    if (selectedParts.length > 0) {
        const customBuildName = 'تجميعة مخصصة';
        const totalPrice = selectedParts.reduce((sum, p) => sum + p.price, 0);
        addToCart({ id: 'custom_build_' + Date.now(), name: customBuildName, price: totalPrice, qty: 1, parts: selectedParts });
        openCart();
    }
});
resetCustomBtn.addEventListener('click', () => {
    [cpuSelect, mbSelect, ramSelect, storageSelect, gpuSelect, caseSelect].forEach(s => s.selectedIndex = 0);
    updateCustomTotal();
});
checkoutBtn.addEventListener('click', () => {
    if (CART.length > 0) {
        checkoutModal.style.display = 'flex';
        checkoutModal.classList.add('fade-in');
    } else {
        alert('السلة فارغة. يرجى إضافة منتجات قبل إتمام الطلب.');
    }
});
cancelOrderBtn.addEventListener('click', () => { checkoutModal.style.display = 'none'; });
placeOrderBtn.addEventListener('click', () => {
    const name = document.getElementById('c-name').value;
    const phone = document.getElementById('c-phone').value;
    const address = document.getElementById('c-address').value;
    const notes = document.getElementById('c-notes').value;
    if (!name || !phone || !address) {
        alert('من فضلك املأ جميع الحقول المطلوبة (الاسم، رقم الهاتف، العنوان).');
        return;
    }
    const whatsappMsg = `طلب جديد من موقع Jaguar Store\n\nالاسم: ${name}\nرقم الهاتف: ${phone}\nالعنوان: ${address}\n\nالطلب:\n${CART.map(i => `${i.name} - ${egCurrency(i.price)} × ${i.qty}`).join('\n')}\n\nالإجمالي: ${egCurrency(CART.reduce((sum, item) => sum + item.price * item.qty, 0))}\nملاحظات: ${notes}`;
    window.open(`https://wa.me/201014392625?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    alert('تم تأكيد طلبك بنجاح! سيتم تحويلك إلى واتساب.');
    localStorage.removeItem('jcart');
    renderCart();
    checkoutModal.style.display = 'none';
});
clearCartBtn.addEventListener('click', () => {
    if (confirm('هل أنت متأكد من تفريغ سلة التسوق؟')) {
        localStorage.removeItem('jcart');
        renderCart();
    }
});
exportOrdersBtn.addEventListener('click', () => {
    const csvContent = "data:text/csv;charset=utf-8," + "Product Name,Price,Quantity\n" + CART.map(e => `${e.name},${e.price},${e.qty}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "orders.csv");
    document.body.appendChild(link);
    link.click();
});
