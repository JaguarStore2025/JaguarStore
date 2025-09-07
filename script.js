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
        { id: 'ram_3', name: 'new - PNY 8GB Performance DDR4 3200MHz', price: 950, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/PNY%208GB%20Performance%20DDR4%203200MHz.jpg', specifications: { Capacity: '8GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'ram_4', name: 'new - TeamGroup T-Force Delta RGB 8GB 3200MHz', price: 1100, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/TeamGroup%20T-Force%20Delta%20RGB%208GB%203200MHz.jpg', specifications: { Capacity: '8GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'new', rating: 4.8, featured: false, bestSeller: false },
        { id: 'ram_5', name: 'used - Kingston HyperX Fury DDR4 8GB 3200MHz', price: 650, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/ingston%20HyperX%20Fury%20DDR4%208GB%203200MHz%20Cl16%20Gaming%20Memory.jpg', specifications: { Capacity: '8GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'used', rating: 4.5, featured: false, bestSeller: false },
        { id: 'ram_6', name: 'used - PNY 8GB Performance DDR4 3200MHz', price: 650, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/PNY%208GB%20Performance%20DDR4%203200MHz.jpg', specifications: { Capacity: '8GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'used', rating: 4.4, featured: false, bestSeller: false },
        { id: 'ram_7', name: 'used - Crucial 8G DDR4 3200Mhz', price: 700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/RAM-CRUCIL-8G-DDR4-3200-PC.jpg', specifications: { Capacity: '8GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'used', rating: 4.5, featured: false, bestSeller: false },
        { id: 'ram_8', name: 'used - TeamGroup T-Force Delta RGB 8GB 3200MHz', price: 800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/TeamGroup%20T-Force%20Delta%20RGB%208GB%203200MHz.jpg', specifications: { Capacity: '8GB', Speed: '3200MHz', Type: 'DDR4' }, condition: 'used', rating: 4.7, featured: false, bestSeller: false }
    ],
    Storages: [
        { id: 'ssd_1', name: 'new - HikVision Desire P 128GB M.2 NVMe', price: 850, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Hikvision%20Desire%20P%20128GB%20M.2%20NVMe%20PCIe%20Gen3x4%20Internal%20SSD.jpg', specifications: { Capacity: '128GB', Type: 'M.2 NVMe' }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
        { id: 'ssd_2', name: 'new - PNY CS900 250GB SATA III SSD', price: 1100, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/PNY%20CS900%20250GB%20SATA%20III%20SSD%20%E2%80%93%202.5%20form%20factor%2C%20up%20to%20535MBs%20read%2C%20500MBs%20write..jpg', specifications: { Capacity: '250GB', Type: 'SATA SSD' }, condition: 'new', rating: 4.7, featured: true, bestSeller: false },
        { id: 'ssd_3', name: 'new - TeamGroup CX2 256GB SATA SSD', price: 1100, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/TeamGroup%20CX2%20256GB%20SATA%202.5%20Read%20Speed%20520%20MBs%20Write%20Speed%20430%20MBs.jpg', specifications: { Capacity: '256GB', Type: 'SATA SSD' }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'ssd_4', name: 'new - HikVision E100 256GB SSD', price: 1100, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/HikVision%20E100%20256GB%202.5%20SATA%20SSD%20with%20up%20to%20550MB%20s%20read%20500MB%20s%20write%20speeds%203D%20NAND.jpg', specifications: { Capacity: '256GB', Type: 'SATA SSD' }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'ssd_5', name: 'new - Crucial BX500 500GB SSD', price: 1800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Crucial%20BX500%20500GB%20SSD%2C%20SATA%206Gbs%2C%202.5%20(7mm)%2C%20550MBs%20read%2C%20500MBs%20write%2C%20120TBW.jpg', specifications: { Capacity: '500GB', Type: 'SATA SSD' }, condition: 'new', rating: 4.8, featured: true, bestSeller: false },
        { id: 'ssd_6', name: 'new - Lexar NM610PRO 500GB M.2 NVMe', price: 2000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Lexar%20NM610PRO%20500GB%20M.2%20NVMe%20SSD%20%E2%80%93%20PCIe%20Gen3x4%2C%203300MBs%20read%2C%201700MBs%20write%2C%203D%20NAND.jpg', specifications: { Capacity: '500GB', Type: 'M.2 NVMe' }, condition: 'new', rating: 4.9, featured: false, bestSeller: false },
        { id: 'ssd_7', name: 'new - HDD W AND D 500G', price: 850, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/HDD%20W%20%20AND%20D%20500G.jpg', specifications: { Capacity: '500GB', Type: 'HDD' }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
        { id: 'ssd_8', name: 'new - HDD W AND D 1000G', price: 1400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/HDD%20W%20AND%20D%201000G.jpg', specifications: { Capacity: '1TB', Type: 'HDD' }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'ssd_9', name: 'used - Redragon Dragon Knight RM113 256GB SATA III SSD', price: 750, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Redragon%20Dragon%20Knight%20RM113%20256GB%202.5%20SATA%20III%20SSD%20with%20up%20to%20500MBs%20read%2C%20400MBs%20write.jpg', specifications: { Capacity: '256GB', Type: 'SATA SSD' }, condition: 'used', rating: 4.4, featured: false, bestSeller: false }
    ],
    Cases: [
        { id: 'case_1', name: 'new - Aerocool Designer ARGB PC MID TOWER CASE + LUX 550W POWER SUPPLY 80+PLUS BRONZE ACCX-ES05002.11', price: 2150, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Aerocool%20Designer%20ARGB%20PC%20MID%20TOWER%20CASE%20%2B%20LUX%20550W%20POWER%20SUPPLY%2080%2BPLUS%20BRONZE%20ACCX-ES05002.11.jpg', specifications: { Type: 'Mid Tower', Power_Supply: '550W' }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'case_2', name: 'new - GAMDIAS AURA GC2 ELITE Mid-Tower Case And AURA GP750 750W Power Supply', price: 2800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/GAMDIAS%20AURA%20GC2%20ELITE%20Mid-Tower%20Case%20And%20AURA%20GP750%20750W%20Power%20Supply.jpg', specifications: { Type: 'Mid Tower', Power_Supply: '750W' }, condition: 'new', rating: 4.8, featured: false, bestSeller: false },
        { id: 'case_3', name: 'new - Xigmatek Sky II FIXEDRGB+ X-Power 600W 80+ White Mid Tower Case', price: 2300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/Xigmatek%20Sky%20II%20FIXEDRGB%2B%20X-Power%20600W%2080%2B%20White%20Mid%20Tower%20Case.jpg', specifications: { Type: 'Mid Tower', Power_Supply: '600W' }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'case_4', name: 'new - XIGMATEK Master X II GAMING SUPER-TOWER CASE ARGB 4 Fans PLUS POWER SUPPLY X-Power 600W 80+White', price: 2500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/36802a182d7808b82dd18ee8932cd48f175908b5/XIGMATEK%20Master%20X%20II%20GAMING%20SUPER-TOWER%20CASE%20ARGB%204%20Fans%20PLUS%20POWER%20SUPPLY%20X-Power%20600W%2080%2BWhite.jpg', specifications: { Type: 'Super Tower', Power_Supply: '600W' }, condition: 'new', rating: 4.9, featured: false, bestSeller: false }
    ],
    Featured: [
        { id: 'featured_1', name: 'صورة التجميعة بـ 17500', img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/79ce08f49c85dd07998f1b95a66f04e5fe957ca9/%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D9%8A%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%D9%8A.jpg' }
    ],
    Store: [
        { id: 'store_1', name: 'صورة الموقع', img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/072ff7d1211adbd2fee502810d440807735b686b/store.png' }
    ]
};

const productList = document.getElementById('product-list');
const productCategory = document.getElementById('product-category');
const categoryDropdown = document.getElementById('category-dropdown');
const searchInput = document.getElementById('search-input');
const sortPrice = document.getElementById('sort-price');
const sortRating = document.getElementById('sort-rating');
const clearFiltersBtn = document.getElementById('clear-filters-btn');
const productModal = document.getElementById('product-modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalPrice = document.getElementById('modal-price');
const modalSpecs = document.getElementById('modal-specs');
const modalCondition = document.getElementById('modal-condition');
const modalRating = document.getElementById('modal-rating');
const addToCartBtn = document.getElementById('add-to-cart-btn');
const openCartBtn = document.getElementById('open-cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const clearCartBtn = document.getElementById('clear-cart-btn');
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutModal = document.getElementById('checkout-modal');
const closeCheckoutModal = document.getElementById('close-checkout-modal');
const confirmCheckoutBtn = document.getElementById('confirm-checkout');
const exportOrdersBtn = document.getElementById('export-orders-btn');
const toggleWishlistBtn = document.getElementById('toggle-wishlist');
const wishlistModal = document.getElementById('wishlist-modal');
const closeWishlistBtn = document.getElementById('close-wishlist');
const wishlistItemsContainer = document.getElementById('wishlist-items');
const mainContent = document.getElementById('main-content');

let CART = JSON.parse(localStorage.getItem('jcart')) || [];
let WISHLIST = JSON.parse(localStorage.getItem('jwishlist')) || [];
let currentCategory = 'all';

function updateCategoryDropdown() {
    const categories = Object.keys(partsData);
    categoryDropdown.innerHTML = `<option value="all">كل المنتجات</option>`;
    categories.forEach(category => {
        if (category !== 'Featured' && category !== 'Store') {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryDropdown.appendChild(option);
        }
    });
}


function egCurrency(price) {
    return new Intl.NumberFormat('ar-EG', { style: 'currency', currency: 'EGP' }).format(price);
}

function renderProducts(category = 'all', searchTerm = '', sortBy = null) {
    productList.innerHTML = '';
    const allParts = [].concat(...Object.keys(partsData).filter(key => key !== 'Featured' && key !== 'Store').map(key => partsData[key]));
    
    let filteredParts = allParts.filter(part => {
        const matchesCategory = category === 'all' || (partsData[category] && partsData[category].includes(part));
        const matchesSearch = searchTerm === '' || part.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (category !== 'all' && partsData[category]) {
        filteredParts = partsData[category].filter(part => part.name.toLowerCase().includes(searchTerm.toLowerCase()));
    } else {
        filteredParts = allParts.filter(part => part.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (sortBy === 'price_asc') {
        filteredParts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price_desc') {
        filteredParts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
        filteredParts.sort((a, b) => b.rating - a.rating);
    }

    if (filteredParts.length === 0) {
        productList.innerHTML = '<p class="text-text-muted col-span-full text-center">لا توجد منتجات مطابقة.</p>';
        return;
    }

    filteredParts.forEach(part => {
        const card = document.createElement('div');
        card.classList.add('pcard', 'relative', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'transform', 'hover:scale-105', 'transition-all', 'duration-300', 'cursor-pointer');
        card.innerHTML = `
            ${part.featured ? '<span class="badge absolute top-2 right-2 px-3 py-1 bg-primary-blue text-white rounded-full text-xs font-bold">منتج مميز</span>' : ''}
            ${part.bestSeller ? '<span class="badge absolute top-2 right-12 px-3 py-1 bg-green-500 text-white rounded-full text-xs font-bold">الأكثر مبيعاً</span>' : ''}
            <img src="${part.img}" alt="${part.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-bold text-text-light mb-1">${part.name}</h3>
                <p class="text-sm text-text-muted mb-2">${egCurrency(part.price)}</p>
                <div class="flex items-center text-yellow-400 mb-2">
                    ${'★'.repeat(Math.floor(part.rating))}${'☆'.repeat(5 - Math.floor(part.rating))}
                    <span class="text-text-muted text-xs ml-1">(${part.rating})</span>
                </div>
                <button class="add-to-cart-btn mt-2 bg-primary-blue text-white py-2 px-4 rounded-full w-full hover:bg-secondary-blue transition-colors" data-id="${part.id}">أضف إلى السلة</button>
            </div>
        `;
        card.addEventListener('click', () => {
            showProductModal(part);
        });
        card.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(part);
        });
        productList.appendChild(card);
    });

    const categoryTitle = document.querySelector('.category-title');
    if (category === 'all') {
        categoryTitle.textContent = 'كل المنتجات';
    } else {
        categoryTitle.textContent = category;
    }
}

function showProductModal(part) {
    modalTitle.textContent = part.name;
    modalImage.src = part.img;
    modalPrice.textContent = egCurrency(part.price);
    modalCondition.textContent = `الحالة: ${part.condition === 'new' ? 'جديد' : 'مستعمل'}`;
    modalRating.innerHTML = `
        <div class="flex items-center text-yellow-400 mb-2">
            ${'★'.repeat(Math.floor(part.rating))}${'☆'.repeat(5 - Math.floor(part.rating))}
            <span class="text-text-muted text-xs ml-1">(${part.rating})</span>
        </div>
    `;

    modalSpecs.innerHTML = '';
    for (const key in part.specifications) {
        const specItem = document.createElement('li');
        specItem.classList.add('text-text-muted', 'text-sm');
        specItem.textContent = `${key}: ${part.specifications[key]}`;
        modalSpecs.appendChild(specItem);
    }

    addToCartBtn.dataset.id = part.id;
    productModal.style.display = 'flex';
}

closeModal.addEventListener('click', () => {
    productModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === productModal) {
        productModal.style.display = 'none';
    }
});

addToCartBtn.addEventListener('click', () => {
    const partId = addToCartBtn.dataset.id;
    const part = findPartById(partId);
    if (part) {
        addToCart(part);
        productModal.style.display = 'none';
    }
});

function findPartById(id) {
    for (const category in partsData) {
        if (category !== 'Featured' && category !== 'Store') {
            const part = partsData[category].find(p => p.id === id);
            if (part) return part;
        }
    }
    return null;
}

function addToCart(part) {
    const itemInCart = CART.find(item => item.id === part.id);
    if (itemInCart) {
        itemInCart.qty++;
    } else {
        CART.push({ ...part, qty: 1 });
    }
    updateLocalStorage();
    renderCart();
}

function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    if (CART.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-text-muted text-center">السلة فارغة.</p>';
    } else {
        CART.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('flex', 'items-center', 'justify-between', 'py-2', 'border-b', 'border-gray-700');
            cartItem.innerHTML = `
                <div class="flex items-center">
                    <img src="${item.img}" alt="${item.name}" class="w-16 h-16 object-cover rounded-md mr-4">
                    <div>
                        <h4 class="text-sm font-bold">${item.name}</h4>
                        <p class="text-xs text-text-muted">${egCurrency(item.price)}</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <button class="bg-primary-blue text-white px-2 rounded-full h-6 w-6 hover:bg-secondary-blue transition-colors" onclick="changeQuantity('${item.id}', -1)">-</button>
                    <span class="mx-2 text-white">${item.qty}</span>
                    <button class="bg-primary-blue text-white px-2 rounded-full h-6 w-6 hover:bg-secondary-blue transition-colors" onclick="changeQuantity('${item.id}', 1)">+</button>
                    <button class="text-red-500 hover:text-red-700 ml-4" onclick="removeFromCart('${item.id}')">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                    </button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price * item.qty;
        });
    }
    cartTotalElement.textContent = egCurrency(total);
}

function changeQuantity(id, change) {
    const item = CART.find(i => i.id === id);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            removeFromCart(id);
        } else {
            updateLocalStorage();
            renderCart();
        }
    }
}

function removeFromCart(id) {
    CART = CART.filter(item => item.id !== id);
    updateLocalStorage();
    renderCart();
}

function updateLocalStorage() {
    localStorage.setItem('jcart', JSON.stringify(CART));
    localStorage.setItem('jwishlist', JSON.stringify(WISHLIST));
}

function showFeatured(featured) {
    productList.innerHTML = '';
    const featuredCategoryTitle = document.querySelector('.category-title');
    featuredCategoryTitle.textContent = 'العروض';

    featured.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('pcard', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'transform', 'hover:scale-105', 'transition-all', 'duration-300', 'cursor-pointer');
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-bold text-text-light mb-1">${item.name}</h3>
            </div>
        `;
        productList.appendChild(card);
    });
}

const showFeaturedProducts = () => {
    const featuredItems = partsData['Featured'];
    const storeImage = partsData['Store'];
    showFeatured(featuredItems);
    showFeatured(storeImage);
};

document.addEventListener('DOMContentLoaded', () => {
    updateCategoryDropdown();
    renderProducts();
    renderCart();

    const featuredLink = document.getElementById('nav-featured');
    featuredLink.addEventListener('click', (e) => {
        e.preventDefault();
        showFeaturedProducts();
    });
});

searchInput.addEventListener('input', (e) => {
    renderProducts(currentCategory, e.target.value);
});

categoryDropdown.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    renderProducts(currentCategory, searchInput.value);
});

sortPrice.addEventListener('click', () => {
    const currentSort = sortPrice.dataset.sort;
    if (currentSort === 'asc') {
        renderProducts(currentCategory, searchInput.value, 'price_desc');
        sortPrice.dataset.sort = 'desc';
        sortPrice.innerHTML = 'السعر: من الأعلى للأقل';
    } else {
        renderProducts(currentCategory, searchInput.value, 'price_asc');
        sortPrice.dataset.sort = 'asc';
        sortPrice.innerHTML = 'السعر: من الأقل للأعلى';
    }
    sortRating.dataset.sort = '';
    sortRating.innerHTML = 'التقييم';
});

sortRating.addEventListener('click', () => {
    renderProducts(currentCategory, searchInput.value, 'rating');
    sortRating.dataset.sort = 'rating';
    sortRating.innerHTML = 'التقييم: من الأعلى للأقل';
    sortPrice.dataset.sort = '';
    sortPrice.innerHTML = 'السعر';
});

clearFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    categoryDropdown.value = 'all';
    sortPrice.dataset.sort = '';
    sortPrice.innerHTML = 'السعر';
    sortRating.dataset.sort = '';
    sortRating.innerHTML = 'التقييم';
    currentCategory = 'all';
    renderProducts();
});

openCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

closeCartBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

checkoutBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
    checkoutModal.style.display = 'flex';
});

closeCheckoutModal.addEventListener('click', () => {
    checkoutModal.style.display = 'none';
});

const checkoutForm = document.getElementById('checkout-form');
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
    const csvContent = "data:text/csv;charset=utf-8," + "Product Name,Quantity,Price,Total\n" + CART.map(item => `${item.name},${item.qty},${item.price},${item.price * item.qty}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "orders.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

toggleWishlistBtn.addEventListener('click', () => {
    wishlistModal.style.display = 'flex';
});

closeWishlistBtn.addEventListener('click', () => {
    wishlistModal.style.display = 'none';
});

function renderWishlist() {
    wishlistItemsContainer.innerHTML = '';
    if (WISHLIST.length === 0) {
        wishlistItemsContainer.innerHTML = '<p class="text-text-muted text-center">قائمة الأمنيات فارغة.</p>';
        return;
    }
    WISHLIST.forEach(part => {
        const item = document.createElement('div');
        item.classList.add('flex', 'items-center', 'justify-between', 'py-2', 'border-b', 'border-gray-700');
        item.innerHTML = `
            <div class="flex items-center">
                <img src="${part.img}" alt="${part.name}" class="w-16 h-16 object-cover rounded-md mr-4">
                <div>
                    <h4 class="text-sm font-bold">${part.name}</h4>
                    <p class="text-xs text-text-muted">${egCurrency(part.price)}</p>
                </div>
            </div>
            <button class="text-red-500 hover:text-red-700" onclick="removeFromWishlist('${part.id}')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </button>
        `;
        wishlistItemsContainer.appendChild(item);
    });
}

function addToWishlist(part) {
    const itemInWishlist = WISHLIST.find(item => item.id === part.id);
    if (!itemInWishlist) {
        WISHLIST.push(part);
        updateLocalStorage();
        renderWishlist();
    }
}

function removeFromWishlist(id) {
    WISHLIST = WISHLIST.filter(item => item.id !== id);
    updateLocalStorage();
    renderWishlist();
}

const toggleThemeBtn = document.getElementById('toggle-theme');
const html = document.documentElement;

toggleThemeBtn.addEventListener('click', () => {
    html.classList.toggle('dark');
});

const featured = [
    { name: "صورة التجميعة بـ 17500", img: "https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/79ce08f49c85dd07998f1b95a66f04e5fe957ca9/%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D9%8A%D8%B9%D8%A9%20%D8%A7%D9%84%D8%A7%D9%88%D9%84%D9%8A.jpg" },
    { name: "صورة الموقع", img: "https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/072ff7d1211adbd2fee502810d440807735b686b/store.png" }
];

const mainSlider = document.getElementById('main-slider');

featured.forEach(item => {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    slide.innerHTML = `<img src="${item.img}" alt="${item.name}" class="w-full rounded-lg">`;
    mainSlider.appendChild(slide);
});

// Assuming you have a way to handle a carousel, for example a library like Swiper.js or a custom implementation
// For a simple example:
let slideIndex = 0;
function showSlides() {
    const slides = mainSlider.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
// showSlides();
