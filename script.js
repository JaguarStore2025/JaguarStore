const partsData = {
    CPUs: [
        { id: 'cpu_1', name: 'new - I3 10105F', price: 3700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2010105F.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 4, Threads: 8 }, condition: 'new', rating: 4.5, featured: true, bestSeller: false },
        { id: 'cpu_2', name: 'new - I3 12100F Box', price: 3600, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2012100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'new', rating: 5, featured: true, bestSeller: true },
        { id: 'cpu_3', name: 'new - I3 12100F Tray', price: 3300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2012100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
        { id: 'cpu_4', name: 'new - I3 13100F Box', price: 5300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2013100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'new', rating: 4.8, featured: false, bestSeller: false },
        { id: 'cpu_5', name: 'new - I3 14100F Box', price: 5200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2014100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'cpu_6', name: 'new - I5 10400F Tray', price: 4900, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2010400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'cpu_7', name: 'new - I5 11400F Box', price: 5200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2011400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
        { id: 'cpu_8', name: 'new - I5 12400F Box', price: 6000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2012400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 6, Threads: 12 }, condition: 'new', rating: 5, featured: true, bestSeller: true },
        { id: 'cpu_9', name: 'new - I5 12400F Tray', price: 5400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2012400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.8, featured: false, bestSeller: false },
        { id: 'cpu_10', name: 'new - Ryzen 5 5600', price: 5400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%205600.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.9, featured: false, bestSeller: true },
        { id: 'cpu_11', name: 'new - Ryzen 5 5600G', price: 5400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%205600%20G.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.8, featured: true, bestSeller: false },
        { id: 'cpu_12', name: 'used - I3 10100F', price: 2200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2010100F.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 4, Threads: 8 }, condition: 'used', rating: 4, featured: false, bestSeller: false },
        { id: 'cpu_13', name: 'used - I3 12100F Box', price: 3500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2012100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'used', rating: 4.5, featured: false, bestSeller: false },
        { id: 'cpu_14', name: 'used - Ryzen 5 5600', price: 5400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%205600.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.9, featured: true, bestSeller: false },
        { id: 'cpu_15', name: 'new - I5 13400F Box', price: 7200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2013400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'new', rating: 4.9, featured: false, bestSeller: false },
        { id: 'cpu_16', name: 'new - I5 13400F Tray', price: 6500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2013400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'cpu_17', name: 'new - I5 14400F Box', price: 7300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2014400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'new', rating: 4.9, featured: false, bestSeller: false },
        { id: 'cpu_18', name: 'new - I5 14400F Tray', price: 7100, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2014400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'new', rating: 4.8, featured: false, bestSeller: false },
        { id: 'cpu_19', name: 'new - Ryzen 3 4100', price: 2700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%203%204100.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 4, Threads: 8 }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
        { id: 'cpu_20', name: 'new - Ryzen 5 4500 Box', price: 3800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%204500%20Box.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'cpu_21', name: 'new - Ryzen 5 5500 Box', price: 4350, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%205500%20Box.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'cpu_22', name: 'new - Ryzen 5 5500 Tray', price: 4150, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%205500%20Box.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'cpu_23', name: 'new - Ryzen 5 5600 GT Box', price: 6900, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%205600%20GT%20Box.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.9, featured: false, bestSeller: false },
        { id: 'cpu_24', name: 'used - I3 10105F', price: 2200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2010105F.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 4, Threads: 8 }, condition: 'used', rating: 4, featured: false, bestSeller: false },
        { id: 'cpu_25', name: 'used - I3 12100F Tray', price: 3200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2012100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'used', rating: 4.4, featured: false, bestSeller: false },
        { id: 'cpu_26', name: 'used - I3 13100F Box', price: 4000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I3%2013100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'used', rating: 4.6, featured: false, bestSeller: false },
        { id: 'cpu_27', name: 'used - I5 10400F Tray', price: 4000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2010400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.5, featured: false, bestSeller: false },
        { id: 'cpu_28', name: 'used - I5 11400F Box', price: 4300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2011400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.6, featured: false, bestSeller: false },
        { id: 'cpu_29', name: 'used - I5 12400F Box', price: 5000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2012400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.7, featured: false, bestSeller: false },
        { id: 'cpu_30', name: 'used - I5 12400F Tray', price: 4400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2012400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.5, featured: false, bestSeller: false },
        { id: 'cpu_31', name: 'used - I5 14400F Box', price: 6800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2014400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'used', rating: 4.8, featured: false, bestSeller: false },
        { id: 'cpu_32', name: 'used - I5 14400F Tray', price: 6600, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/I5%2014400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'used', rating: 4.7, featured: false, bestSeller: false },
        { id: 'cpu_33', name: 'used - Ryzen 3 3100', price: 1900, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%203%203100.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 4, Threads: 8 }, condition: 'used', rating: 4.2, featured: false, bestSeller: false },
        { id: 'cpu_34', name: 'used - Ryzen 5 4500 Box', price: 3200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%204500%20Box.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.5, featured: false, bestSeller: false },
        { id: 'cpu_35', name: 'used - Ryzen 5 5600 G', price: 5400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Ryzen%205%205600%20G.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.8, featured: false, bestSeller: false }
    ],
    Motherboards: [
        { id: 'mb_1', name: 'new - GIGABYTE H410M S2H', price: 2700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/GIGABYTE%20H410M%20S2H.png', type: 'Intel', specifications: { Socket: 'LGA1200', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
        { id: 'mb_2', name: 'new - ASUS PRIME H510M-K R2.0', price: 3600, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/ASUS%20PRIME%20H510M-K%20R2.0.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'mb_3', name: 'new - MSI PRO H610M-E DDR4', price: 4000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/MSI%20PRO%20H610M-E%20DDR4.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.8, featured: true, bestSeller: true },
        { id: 'mb_4', name: 'new - ASRock B660M-HDV', price: 4100, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/ASRock%20B660M-HDV.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'mb_5', name: 'new - MSI MOTHERBOARD B450M-A PRO MAX II', price: 3700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/MSI%20MOTHERBOARD%20B450M-A%20PRO%20MAX%20II.jpg', type: 'AMD', specifications: { Socket: 'AM4', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.5, featured: false, bestSeller: true },
        { id: 'mb_6', name: 'new - MSI B560-A PRO', price: 4200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/MSI%20B560-A%20PRO.png', type: 'Intel', specifications: { Socket: 'LGA1200', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.8, featured: false, bestSeller: false },
        { id: 'mb_7', name: 'new - ASUS PRIME B450M-A II', price: 4200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/ASUS%20PRIME%20B450M-A%20II.jpg', type: 'AMD', specifications: { Socket: 'AM4', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'mb_8', name: 'new - ASUS PRIME B550M-K', price: 4600, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/ASUS%20PRIME%20B550M-K.jpg', type: 'AMD', specifications: { Socket: 'AM4', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'mb_9', name: 'new - MSI B550M PRO-VDH WIFI', price: 5800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/MSI%20B550M%20PRO-VDH%20WIFI%20Motherboard.jpg', type: 'AMD', specifications: { Socket: 'AM4', RAM_Type: 'DDR4' }, condition: 'new', rating: 4.9, featured: false, bestSeller: false },
    ],
    RAMs: [
        { id: 'ram_1', name: 'new - Kingston FURY Beast RGB 16GB DDR4 3200MT/s', price: 2350, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Kingston%20FURY%20Beast%20RGB%208GB%20DDR4%203200MTs.jpg', specifications: { Capacity: '16GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'new', rating: 4.9, featured: true, bestSeller: true },
        { id: 'ram_2', name: 'new - Crucial 16G DDR4 3200Mhz', price: 1700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Crucial%2016G%20DDR4%203200Mhz.jpg', specifications: { Capacity: '16GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'ram_3', name: 'new - PNY 8GB Performance DDR4 3200MHz', price: 950, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/PNY%208GB%20Performance%20DDR4%203200MHz.jpg', specifications: { Capacity: '8GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'new', rating: 4.2, featured: false, bestSeller: false },
        { id: 'ram_4', name: 'new - TeamGroup T-Force Delta RGB 8GB 3200MHz', price: 1400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/TeamGroup%20T-Force%20Delta%20RGB%208GB%203200MHz.jpg', specifications: { Capacity: '8GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
        { id: 'ram_5', name: 'new - Crucial 8G DDR4 3200Mhz', price: 900, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/RAM-CRUCIL-8G-DDR4-3200-PC.jpg', specifications: { Capacity: '8GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'ram_6', name: 'used - Kingston HyperX Fury DDR4 8GB 3200MHz', price: 800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/ingston%20HyperX%20Fury%20DDR4%208GB%203200MHz%20Cl16%20Gaming%20Memory.jpg', specifications: { Capacity: '8GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'used', rating: 4.4, featured: false, bestSeller: false },
    ],
    Storages: [
        { id: 'sto_1', name: 'new - Crucial BX500 500GB SSD', price: 1800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Crucial%20BX500%20500GB%20SSD%2C%20SATA%206Gbs%2C%202.5%20(7mm)%2C%20550MBs%20read%2C%20500MBs%20write%2C%20120TBW.jpg', specifications: { Capacity: '500GB', Type: 'SSD', Form_Factor: '2.5', Interface: 'SATA III' }, condition: 'new', rating: 4.8, featured: true, bestSeller: false },
        { id: 'sto_2', name: 'new - PNY CS900 250GB SSD', price: 900, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/PNY%20CS900%20250GB%20SATA%20III%20SSD%20%E2%80%93%202.5%20form%20factor%2C%20up%20to%20535MBs%20read%2C%20500MBs%20write..jpg', specifications: { Capacity: '250GB', Type: 'SSD', Form_Factor: '2.5', Interface: 'SATA III' }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'sto_3', name: 'new - HikVision E100 256GB SSD', price: 850, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/HikVision%20E100%20256GB%202.5%20SATA%20SSD%20with%20up%20to%20550MB%20s%20read%20500MB%20s%20write%20speeds%203D%20NAND.jpg', specifications: { Capacity: '256GB', Type: 'SSD', Form_Factor: '2.5', Interface: 'SATA III' }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
        { id: 'sto_4', name: 'new - Hikvision Desire P 128GB M.2 NVMe SSD', price: 600, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Hikvision%20Desire%20P%20128GB%20M.2%20NVMe%20PCIe%20Gen3x4%20Internal%20SSD.jpg', specifications: { Capacity: '128GB', Type: 'SSD', Form_Factor: 'M.2', Interface: 'NVMe PCIe' }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'sto_5', name: 'new - Lexar NM610PRO 500GB M.2 NVMe SSD', price: 1600, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Lexar%20NM610PRO%20500GB%20M.2%20NVMe%20SSD%20%E2%80%93%20PCIe%20Gen3x4%2C%203300MBs%20read%2C%201700MBs%20write%2C%203D%20NAND.jpg', specifications: { Capacity: '500GB', Type: 'SSD', Form_Factor: 'M.2', Interface: 'NVMe PCIe' }, condition: 'new', rating: 4.9, featured: true, bestSeller: false },
        { id: 'sto_6', name: 'used - HDD W&D 500G', price: 500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/HDD%20W%20%20AND%20D%20500G.jpg', specifications: { Capacity: '500GB', Type: 'HDD', Form_Factor: '3.5', Interface: 'SATA III' }, condition: 'used', rating: 4.1, featured: false, bestSeller: false },
        { id: 'sto_7', name: 'used - HDD W&D 1000G', price: 700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/HDD%20W%20AND%20D%201000G.jpg', specifications: { Capacity: '1000GB', Type: 'HDD', Form_Factor: '3.5', Interface: 'SATA III' }, condition: 'used', rating: 4.3, featured: false, bestSeller: false },
        { id: 'sto_8', name: 'used - Redragon Dragon Knight RM113 256GB SSD', price: 700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Redragon%20Dragon%20Knight%20RM113%20256GB%202.5%20SATA%20III%20SSD%20with%20up%20to%20500MBs%20read%2C%20400MBs%20write.jpg', specifications: { Capacity: '256GB', Type: 'SSD', Form_Factor: '2.5', Interface: 'SATA III' }, condition: 'used', rating: 4.2, featured: false, bestSeller: false },
        { id: 'sto_9', name: 'used - TeamGroup CX2 256GB SATA 2.5 SSD', price: 750, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/TeamGroup%20CX2%20256GB%20SATA%202.5%20Read%20Speed%20520%20MBs%20Write%20Speed%20430%20MBs.jpg', specifications: { Capacity: '256GB', Type: 'SSD', Form_Factor: '2.5', Interface: 'SATA III' }, condition: 'used', rating: 4.4, featured: false, bestSeller: false },
    ],
    Cases: [
        { id: 'cas_1', name: 'new - XIGMATEK Master X II GAMING SUPER-TOWER', price: 2300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/XIGMATEK%20Master%20X%20II%20GAMING%20SUPER-TOWER%20CASE%20ARGB%204%20Fans%20PLUS%20POWER%20SUPPLY%20X-Power%20600W%2080%2BWhite.jpg', specifications: { Form_Factor: 'Super Tower', Fans: '4 ARGB', PSU: '600W 80+ White' }, condition: 'new', rating: 4.8, featured: true, bestSeller: true },
        { id: 'cas_2', name: 'new - Xigmatek Sky II FIXEDRGB+ X-Power 600W', price: 1800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Xigmatek%20Sky%20II%20FIXEDRGB%2B%20X-Power%20600W%2080%2B%20White%20Mid%20Tower%20Case.jpg', specifications: { Form_Factor: 'Mid Tower', Fans: 'FIXED RGB', PSU: '600W 80+ White' }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'cas_3', name: 'new - Aerocool Designer ARGB PC MID', price: 1750, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Aerocool%20Designer%20ARGB%20PC%20MID%20TOWER%20CASE%20%2B%20LUX%20550W%20POWER%20SUPPLY%2080%2BPLUS%20BRONZE%20ACCX-ES05002.11.jpg', specifications: { Form_Factor: 'Mid Tower', Fans: 'ARGB', PSU: '550W 80+ Bronze' }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'cas_4', name: 'new - GAMDIAS AURA GC2 ELITE Mid-Tower', price: 2200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/GAMDIAS%20AURA%20GC2%20ELITE%20Mid-Tower%20Case%20And%20AURA%20GP750%20750W%20Power%20Supply.jpg', specifications: { Form_Factor: 'Mid Tower', Fans: 'ARGB', PSU: '750W' }, condition: 'new', rating: 4.9, featured: false, bestSeller: false },
    ],
    PrebuiltPCs: [
        { id: 'pc_1', name: 'Prebuilt PC - 17500 EGP', price: 17500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/79ce08f49c85dd07998f1b95a66f04e5fe957ca9/%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D9%8A%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%D9%8A.jpg', specifications: { CPU: 'I3 12100F', Motherboard: 'MSI PRO H610M-E DDR4', RAM: '16GB DDR4 3200MHz', Storage: '256GB SSD', Case: 'Xigmatek Master X II', PSU: '600W' }, condition: 'new', rating: 5, featured: true, bestSeller: true },
    ]
};

function egCurrency(price) {
    return price.toLocaleString('en-EG', { style: 'currency', currency: 'EGP' });
}

const productCards = document.getElementById('product-cards');
const categorySelect = document.getElementById('category-select');
const sortSelect = document.getElementById('sort-select');
const conditionSelect = document.getElementById('condition-select');
const featuredCheckbox = document.getElementById('featured-checkbox');
const bestSellerCheckbox = document.getElementById('best-seller-checkbox');
const searchInput = document.getElementById('search-input');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const clearCartBtn = document.getElementById('clear-cart-btn');
const exportOrdersBtn = document.getElementById('export-orders-btn');
const checkoutModal = document.getElementById('checkout-modal');
const closeBtn = document.querySelector('.close-button');
const checkoutForm = document.getElementById('checkout-form');
let CART = JSON.parse(localStorage.getItem('jcart')) || [];

function renderParts(filteredParts) {
    productCards.innerHTML = '';
    if (filteredParts.length === 0) {
        productCards.innerHTML = '<p class="no-results">لم يتم العثور على نتائج. 😔</p>';
        return;
    }
    filteredParts.forEach(part => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        let specificationsHtml = '';
        for (const [key, value] of Object.entries(part.specifications)) {
            specificationsHtml += `<p><strong>${key}:</strong> ${value}</p>`;
        }
        card.innerHTML = `
            <img src="${part.img}" alt="${part.name}" onerror="this.src='https://via.placeholder.com/200?text=Image+Not+Found'">
            <h3>${part.name}</h3>
            <p class="price">${egCurrency(part.price)}</p>
            <div class="rating">${'★'.repeat(Math.floor(part.rating))}${'☆'.repeat(5 - Math.floor(part.rating))}</div>
            <div class="specs">
                <h4>المواصفات:</h4>
                ${specificationsHtml}
            </div>
            ${part.bestSeller ? '<div class="badge best-seller-badge">أفضل مبيعاً</div>' : ''}
            ${part.featured ? '<div class="badge featured-badge">مميز</div>' : ''}
            <button class="add-to-cart-btn" data-id="${part.id}">أضف إلى السلة</button>
        `;
        productCards.appendChild(card);
    });
}

function filterAndSortParts() {
    const selectedCategory = categorySelect.value;
    const sortBy = sortSelect.value;
    const filterCondition = conditionSelect.value;
    const filterFeatured = featuredCheckbox.checked;
    const filterBestSeller = bestSellerCheckbox.checked;
    const searchQuery = searchInput.value.toLowerCase();
    const allParts = Object.values(partsData).flat();
    let filteredParts = allParts;
    if (selectedCategory !== 'all') {
        filteredParts = partsData[selectedCategory];
    }
    filteredParts = filteredParts.filter(part => {
        const matchesCondition = filterCondition === 'all' || part.condition === filterCondition;
        const matchesFeatured = !filterFeatured || part.featured;
        const matchesBestSeller = !filterBestSeller || part.bestSeller;
        const matchesSearch = part.name.toLowerCase().includes(searchQuery) ||
                              part.condition.toLowerCase().includes(searchQuery) ||
                              part.type?.toLowerCase().includes(searchQuery) ||
                              Object.values(part.specifications).some(spec => String(spec).toLowerCase().includes(searchQuery));
        return matchesCondition && matchesFeatured && matchesBestSeller && matchesSearch;
    });
    switch (sortBy) {
        case 'price-asc':
            filteredParts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredParts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredParts.sort((a, b) => b.rating - a.rating);
            break;
        case 'name-asc':
            filteredParts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredParts.sort((a, b) => b.name.localeCompare(a.name));
            break;
    }
    renderParts(filteredParts);
}

function updateCartCount() {
    const totalItems = CART.reduce((sum, item) => sum + item.qty, 0);
    cartCount.textContent = totalItems;
}

function addToCart(partId) {
    const allParts = Object.values(partsData).flat();
    const partToAdd = allParts.find(part => part.id === partId);
    if (partToAdd) {
        const existingItem = CART.find(item => item.id === partId);
        if (existingItem) {
            existingItem.qty++;
        } else {
            CART.push({ ...partToAdd, qty: 1 });
        }
        localStorage.setItem('jcart', JSON.stringify(CART));
        renderCart();
    }
}

function removeFromCart(partId) {
    CART = CART.filter(item => item.id !== partId);
    localStorage.setItem('jcart', JSON.stringify(CART));
    renderCart();
}

function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;
    if (CART.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart-msg">السلة فارغة.</p>';
    } else {
        CART.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${item.name} (${egCurrency(item.price)}) × ${item.qty}</span>
                <button class="remove-from-cart-btn" data-id="${item.id}">إزالة</button>
            `;
            cartItems.appendChild(li);
            total += item.price * item.qty;
        });
    }
    cartTotal.textContent = egCurrency(total);
    updateCartCount();
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-btn')) {
        const partId = e.target.dataset.id;
        addToCart(partId);
    }
    if (e.target.classList.contains('remove-from-cart-btn')) {
        const partId = e.target.dataset.id;
        removeFromCart(partId);
    }
});

categorySelect.addEventListener('change', filterAndSortParts);
sortSelect.addEventListener('change', filterAndSortParts);
conditionSelect.addEventListener('change', filterAndSortParts);
featuredCheckbox.addEventListener('change', filterAndSortParts);
bestSellerCheckbox.addEventListener('change', filterAndSortParts);
searchInput.addEventListener('input', filterAndSortParts);
document.addEventListener('DOMContentLoaded', () => {
    Object.keys(partsData).forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
    filterAndSortParts();
    renderCart();
});
checkoutBtn.addEventListener('click', () => {
    if (CART.length > 0) {
        checkoutModal.style.display = 'block';
    } else {
        alert('سلة التسوق فارغة!');
    }
});
closeBtn.addEventListener('click', () => {
    checkoutModal.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === checkoutModal) {
        checkoutModal.style.display = 'none';
    }
});
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('c-name').value;
    const phone = document.getElementById('c-phone').value;
    const address = document.getElementById('c-address').value;
    const notes = document.getElementById('c-notes').value;
    if (!name || !phone || !address) {
        alert('من فضلك املأ جميع الحقول المطلوبة (الاسم، رقم الهاتف، العنوان).');
        return;
    }
    const whatsappMsg = `طلب جديد من موقع Jaguar Store\\n\\nالاسم: ${name}\\nرقم الهاتف: ${phone}\\nالعنوان: ${address}\\n\\nالطلب:\\n${CART.map(i => `${i.name} - ${egCurrency(i.price)} × ${i.qty}`).join('\\n')}\\n\\nالإجمالي: ${egCurrency(CART.reduce((sum, item) => sum + item.price * item.qty, 0))}\\nملاحظات: ${notes}`;
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
    const csvContent = "data:text/csv;charset=utf-8,"
        + "Order Number,Product Name,Price,Quantity,Total,Customer Name,Customer Phone,Customer Address,Notes\n"
        + CART.map((item, index) => `${index + 1},"${item.name}",${item.price},${item.qty},${item.price * item.qty},,"","",""`).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "JaguarStore_Orders.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
