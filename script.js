const partsData = {
    CPUs: [
        { id: 'cpu_1', name: 'new - I3 10105F', price: 3700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I3%2010105F.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 4, Threads: 8 }, condition: 'new', rating: 4.5, featured: true, bestSeller: false },
        { id: 'cpu_2', name: 'new - I3 12100F Box', price: 3600, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I3%2012100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'new', rating: 5, featured: true, bestSeller: true },
        { id: 'cpu_3', name: 'new - I3 12100F Tray', price: 3300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I3%2012100F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
        { id: 'cpu_4', name: 'new - I3 13100F Box', price: 5300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I3%2013100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'new', rating: 4.8, featured: false, bestSeller: false },
        { id: 'cpu_5', name: 'new - I3 14100F Box', price: 5200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I3%2014100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'cpu_6', name: 'new - I5 10400F Tray', price: 4900, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I5%2010400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'cpu_7', name: 'new - I5 11400F Box', price: 5200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I5%2011400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
        { id: 'cpu_8', name: 'new - I5 12400F Box', price: 6000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I5%2012400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 6, Threads: 12 }, condition: 'new', rating: 5, featured: true, bestSeller: true },
        { id: 'cpu_9', name: 'new - I5 12400F Tray', price: 5400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I5%2012400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.8, featured: false, bestSeller: false },
        { id: 'cpu_10', name: 'new - Ryzen 5 5600', price: 5400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/Ryzen%205%205600.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.9, featured: false, bestSeller: true },
        { id: 'cpu_11', name: 'new - Ryzen 5 5600G', price: 5400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/Ryzen%205%205600%20G.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.8, featured: true, bestSeller: false },
        { id: 'cpu_12', name: 'used - I3 10100F', price: 2200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I3%2010100F.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 4, Threads: 8 }, condition: 'used', rating: 4, featured: false, bestSeller: false },
        { id: 'cpu_13', name: 'used - I3 12100F Box', price: 3500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I3%2012100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'used', rating: 4.5, featured: false, bestSeller: false },
        { id: 'cpu_14', name: 'used - Ryzen 5 5600', price: 5400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/Ryzen%205%205600.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.9, featured: true, bestSeller: false },
        { id: 'cpu_15', name: 'new - I5 13400F Box', price: 7200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I5%2013400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'new', rating: 4.9, featured: false, bestSeller: false },
        { id: 'cpu_16', name: 'new - I5 13400F Tray', price: 6500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I5%2013400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'cpu_17', name: 'new - I5 14400F Box', price: 7300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I5%2014400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'new', rating: 4.9, featured: false, bestSeller: false },
        { id: 'cpu_18', name: 'new - I5 14400F Tray', price: 7100, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I5%2014400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'new', rating: 4.8, featured: false, bestSeller: false },
        { id: 'cpu_19', name: 'new - Ryzen 3 4100', price: 2700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/Ryzen%203%204100.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 4, Threads: 8 }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
        { id: 'cpu_20', name: 'new - Ryzen 5 4500 Box', price: 3800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/Ryzen%205%204500%20Box.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'cpu_21', name: 'new - Ryzen 5 5500 Box', price: 4350, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/Ryzen%205%205500%20Box.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'cpu_22', name: 'new - Ryzen 5 5500 Tray', price: 4150, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/Ryzen%205%205500%20Tray.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'cpu_23', name: 'new - Ryzen 5 5600 GT Box', price: 6900, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/Ryzen%205%205600%20GT%20Box.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'new', rating: 4.9, featured: false, bestSeller: false },
        { id: 'cpu_24', name: 'used - I3 10105F', price: 2200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I3%2010105F.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 4, Threads: 8 }, condition: 'used', rating: 4, featured: false, bestSeller: false },
        { id: 'cpu_25', name: 'used - I3 12100F Tray', price: 3200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I3%2012100F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'used', rating: 4.4, featured: false, bestSeller: false },
        { id: 'cpu_26', name: 'used - I3 13100F Box', price: 4000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I3%2013100F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 4, Threads: 8 }, condition: 'used', rating: 4.6, featured: false, bestSeller: false },
        { id: 'cpu_27', name: 'used - I5 10400F Tray', price: 4000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I5%2010400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.5, featured: false, bestSeller: false },
        { id: 'cpu_28', name: 'used - I5 11400F Box', price: 4300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I5%2011400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1200', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.6, featured: false, bestSeller: false },
        { id: 'cpu_29', name: 'used - I5 12400F Box', price: 5000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I5%2012400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.7, featured: false, bestSeller: false },
        { id: 'cpu_30', name: 'used - I5 12400F Tray', price: 4400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I5%2012400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.5, featured: false, bestSeller: false },
        { id: 'cpu_31', name: 'used - I5 14400F Box', price: 6800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I5%2014400F%20Box.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'used', rating: 4.8, featured: false, bestSeller: false },
        { id: 'cpu_32', name: 'used - I5 14400F Tray', price: 6600, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/I5%2014400F%20Tray.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Cores: 10, Threads: 16 }, condition: 'used', rating: 4.7, featured: false, bestSeller: false },
        { id: 'cpu_33', name: 'used - Ryzen 3 3100', price: 1900, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/Ryzen%203%203100.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 4, Threads: 8 }, condition: 'used', rating: 4.2, featured: false, bestSeller: false },
        { id: 'cpu_34', name: 'used - Ryzen 5 4500 Box', price: 3200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/Ryzen%205%204500%20Box.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.5, featured: false, bestSeller: false },
        { id: 'cpu_35', name: 'used - Ryzen 5 5600 G', price: 5400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/Ryzen%205%205600%20G.jpg', type: 'AMD', specifications: { Socket: 'AM4', Cores: 6, Threads: 12 }, condition: 'used', rating: 4.8, featured: false, bestSeller: false }
    ],
    Motherboards: [
        { id: 'mb_1', name: 'new - GIGABYTE H410M S2H', price: 2700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/GIGABYTE%20H410M%20S2H.png', type: 'Intel', specifications: { Socket: 'LGA1200', Chipset: 'H410', FormFactor: 'Micro ATX' }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'mb_2', name: 'new - GIGABYTE H610M H V2', price: 3000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/GIGABYTE%20H610M%20H%20V2.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Chipset: 'H610', FormFactor: 'Micro ATX' }, condition: 'new', rating: 4.8, featured: true, bestSeller: true },
        { id: 'mb_3', name: 'new - MSI A320M A PRO', price: 2300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/MSI%20A320M%20A%20PRO.png', type: 'AMD', specifications: { Socket: 'AM4', Chipset: 'A320', FormFactor: 'Micro ATX' }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'mb_4', name: 'used - GIGABYTE H610M H V2', price: 2800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/GIGABYTE%20H610M%20H%20V2.jpg', type: 'Intel', specifications: { Socket: 'LGA1700', Chipset: 'H610', FormFactor: 'Micro ATX' }, condition: 'used', rating: 4.6, featured: false, bestSeller: false },
        { id: 'mb_5', name: 'used - GIGABYTE H410M S2H', price: 2600, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/GIGABYTE%20H410M%20S2H.png', type: 'Intel', specifications: { Socket: 'LGA1200', Chipset: 'H410', FormFactor: 'Micro ATX' }, condition: 'used', rating: 4.4, featured: false, bestSeller: false }
    ],
    RAM: [
        { id: 'ram_1', name: 'new - 8GB DDR4 2666MHZ', price: 1000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/8GB%20DDR4%202666MHZ.jpg', type: 'DDR4', specifications: { Capacity: '8GB', Speed: '2666MHz' }, condition: 'new', rating: 4.8, featured: true, bestSeller: true },
        { id: 'ram_2', name: 'new - 16GB DDR4 3200MHZ', price: 1800, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/16GB%20DDR4%203200MHZ.jpg', type: 'DDR4', specifications: { Capacity: '16GB', Speed: '3200MHz' }, condition: 'new', rating: 4.9, featured: true, bestSeller: true },
        { id: 'ram_3', name: 'new - 8GB DDR4 3200MHZ', price: 1100, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/8GB%20DDR4%203200MHZ.jpg', type: 'DDR4', specifications: { Capacity: '8GB', Speed: '3200MHz' }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'ram_4', name: 'used - 8GB DDR4 2666MHZ', price: 900, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/8GB%20DDR4%202666MHZ.jpg', type: 'DDR4', specifications: { Capacity: '8GB', Speed: '2666MHz' }, condition: 'used', rating: 4.6, featured: false, bestSeller: false },
        { id: 'ram_5', name: 'used - 16GB DDR4 3200MHZ', price: 1600, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/16GB%20DDR4%203200MHZ.jpg', type: 'DDR4', specifications: { Capacity: '16GB', Speed: '3200MHz' }, condition: 'used', rating: 4.8, featured: false, bestSeller: false }
    ],
    Storage: [
        { id: 'ssd_1', name: 'new - 240GB SSD', price: 700, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/240GB%20SSD.jpg', type: 'SSD', specifications: { Capacity: '240GB', Type: 'SATA' }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
        { id: 'ssd_2', name: 'new - 480GB SSD', price: 1200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/480GB%20SSD.jpg', type: 'SSD', specifications: { Capacity: '480GB', Type: 'SATA' }, condition: 'new', rating: 4.7, featured: false, bestSeller: true },
        { id: 'ssd_3', name: 'new - 512GB M.2 NVMe', price: 1400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/512GB%20M.2%20NVMe.jpg', type: 'M.2 NVMe', specifications: { Capacity: '512GB', Type: 'NVMe' }, condition: 'new', rating: 4.8, featured: true, bestSeller: true },
        { id: 'ssd_4', name: 'new - 1TB M.2 NVMe', price: 2500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/1TB%20M.2%20NVMe.jpg', type: 'M.2 NVMe', specifications: { Capacity: '1TB', Type: 'NVMe' }, condition: 'new', rating: 4.9, featured: true, bestSeller: false },
        { id: 'ssd_5', name: 'new - 1TB HDD', price: 1500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/1TB%20HDD.jpg', type: 'HDD', specifications: { Capacity: '1TB', Type: '3.5"' }, condition: 'new', rating: 4.3, featured: false, bestSeller: false },
        { id: 'ssd_6', name: 'used - 240GB SSD', price: 600, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/240GB%20SSD.jpg', type: 'SSD', specifications: { Capacity: '240GB', Type: 'SATA' }, condition: 'used', rating: 4.2, featured: false, bestSeller: false },
        { id: 'ssd_7', name: 'used - 480GB SSD', price: 1000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/480GB%20SSD.jpg', type: 'SSD', specifications: { Capacity: '480GB', Type: 'SATA' }, condition: 'used', rating: 4.5, featured: false, bestSeller: false },
        { id: 'ssd_8', name: 'used - 512GB M.2 NVMe', price: 1200, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/512GB%20M.2%20NVMe.jpg', type: 'M.2 NVMe', specifications: { Capacity: '512GB', Type: 'NVMe' }, condition: 'used', rating: 4.6, featured: false, bestSeller: false }
    ],
    GPUs: [
        { id: 'gpu_1', name: 'new - RTX 3050 8GB', price: 12000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/RTX%203050%208GB.jpg', type: 'Nvidia', specifications: { VRAM: '8GB GDDR6', Architecture: 'Ampere' }, condition: 'new', rating: 4.9, featured: true, bestSeller: false },
        { id: 'gpu_2', name: 'new - GTX 1650 4GB', price: 7000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/GTX%201650%204GB.jpg', type: 'Nvidia', specifications: { VRAM: '4GB GDDR5', Architecture: 'Turing' }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'gpu_3', name: 'new - RX 6600 8GB', price: 9000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/RX%206600%208GB.jpg', type: 'AMD', specifications: { VRAM: '8GB GDDR6', Architecture: 'RDNA 2' }, condition: 'new', rating: 4.8, featured: false, bestSeller: true },
        { id: 'gpu_4', name: 'used - RTX 3050 8GB', price: 11000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/RTX%203050%208GB.jpg', type: 'Nvidia', specifications: { VRAM: '8GB GDDR6', Architecture: 'Ampere' }, condition: 'used', rating: 4.8, featured: false, bestSeller: false },
        { id: 'gpu_5', name: 'used - GTX 1650 4GB', price: 6500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/GTX%201650%204GB.jpg', type: 'Nvidia', specifications: { VRAM: '4GB GDDR5', Architecture: 'Turing' }, condition: 'used', rating: 4.6, featured: false, bestSeller: false }
    ],
    PSUs: [
        { id: 'psu_1', name: 'new - GIGABYTE P450B', price: 1500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/GIGABYTE%20P450B.jpg', type: 'GIGABYTE', specifications: { Wattage: '450W', Efficiency: '80+ Bronze' }, condition: 'new', rating: 4.5, featured: false, bestSeller: false },
        { id: 'psu_2', name: 'new - COUGAR GEX 650', price: 2400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/COUGAR%20GEX%20650.jpg', type: 'COUGAR', specifications: { Wattage: '650W', Efficiency: '80+ Gold' }, condition: 'new', rating: 4.9, featured: true, bestSeller: true },
        { id: 'psu_3', name: 'used - GIGABYTE P450B', price: 1300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/GIGABYTE%20P450B.jpg', type: 'GIGABYTE', specifications: { Wattage: '450W', Efficiency: '80+ Bronze' }, condition: 'used', rating: 4.3, featured: false, bestSeller: false }
    ],
    Cases: [
        { id: 'case_1', name: 'new - GAMEMAX S101', price: 1500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/GAMEMAX%20S101.jpg', type: 'GAMEMAX', specifications: { FormFactor: 'Mid Tower', SidePanel: 'Tempered Glass' }, condition: 'new', rating: 4.6, featured: false, bestSeller: false },
        { id: 'case_2', name: 'new - AZZA APOLLO 430', price: 2000, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/AZZA%20APOLLO%20430.jpg', type: 'AZZA', specifications: { FormFactor: 'Mid Tower', SidePanel: 'Tempered Glass' }, condition: 'new', rating: 4.8, featured: true, bestSeller: true },
        { id: 'case_3', name: 'used - GAMEMAX S101', price: 1300, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/GAMEMAX%20S101.jpg', type: 'GAMEMAX', specifications: { FormFactor: 'Mid Tower', SidePanel: 'Tempered Glass' }, condition: 'used', rating: 4.4, featured: false, bestSeller: false }
    ],
    Coolers: [
        { id: 'cooler_1', name: 'new - DEEPCOOL AG200', price: 500, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/DEEPCOOL%20AG200.jpg', type: 'DEEPCOOL', specifications: { Type: 'Air Cooler', TDP: '100W' }, condition: 'new', rating: 4.7, featured: false, bestSeller: false },
        { id: 'cooler_2', name: 'new - DEEPCOOL AK400', price: 900, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/DEEPCOOL%20AK400.jpg', type: 'DEEPCOOL', specifications: { Type: 'Air Cooler', TDP: '220W' }, condition: 'new', rating: 4.9, featured: true, bestSeller: true },
        { id: 'cooler_3', name: 'used - DEEPCOOL AG200', price: 400, img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/DEEPCOOL%20AG200.jpg', type: 'DEEPCOOL', specifications: { Type: 'Air Cooler', TDP: '100W' }, condition: 'used', rating: 4.5, featured: false, bestSeller: false }
    ]
};

const prebuiltSystemsData = [
    {
        id: 'prebuilt_1',
        name: 'The Gaming Starter',
        img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/Gaming%20Starter.jpg',
        price: 13000,
        specifications: {
            CPU: 'Ryzen 5 5500 Box',
            Motherboard: 'MSI A320M A PRO',
            GPU: 'GTX 1650 4GB',
            RAM: '8GB DDR4 3200MHZ',
            Storage: '240GB SSD',
            PSU: 'GIGABYTE P450B',
            Case: 'GAMEMAX S101'
        }
    },
    {
        id: 'prebuilt_2',
        name: 'The Performance King',
        img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/Performance%20King.jpg',
        price: 17500,
        specifications: {
            CPU: 'I3 12100F Box',
            Motherboard: 'GIGABYTE H610M H V2',
            GPU: 'RTX 3050 8GB',
            RAM: '16GB DDR4 3200MHZ',
            Storage: '512GB M.2 NVMe',
            PSU: 'COUGAR GEX 650',
            Case: 'AZZA APOLLO 430'
        }
    },
    {
        id: 'prebuilt_3',
        name: 'The Ultimate Pro',
        img: 'https://raw.githubusercontent.com/JaguarStore2025/JaguarStore/main/Ultimate%20Pro.jpg',
        price: 25000,
        specifications: {
            CPU: 'I5 12400F Box',
            Motherboard: 'GIGABYTE H610M H V2',
            GPU: 'RTX 3050 8GB',
            RAM: '16GB DDR4 3200MHZ',
            Storage: '1TB M.2 NVMe',
            PSU: 'COUGAR GEX 650',
            Case: 'AZZA APOLLO 430'
        }
    }
];

// Helper function to format currency
const egCurrency = (amount) => {
    return `${amount.toLocaleString()} EGP`;
};

// State variables
let CART = JSON.parse(localStorage.getItem('jcart')) || [];
let WISHLIST = JSON.parse(localStorage.getItem('jwishlist')) || [];
let COMPARE_LIST = JSON.parse(localStorage.getItem('jcompare')) || [];

// DOM elements
const productsGrid = document.getElementById('products-grid');
const prebuiltGrid = document.getElementById('prebuilt-grid');
const partsSelector = document.getElementById('parts-selector');
const partList = document.getElementById('part-list');
const partCompatibility = document.getElementById('part-compatibility');
const checkoutBtn = document.getElementById('checkout-btn');
const emptyCartBtn = document.getElementById('empty-cart-btn');
const totalElement = document.getElementById('total-price');
const cartCount = document.getElementById('cart-count');
const wishlistCount = document.getElementById('wishlist-count');
const cartPanel = document.getElementById('cart-panel');
const wishlistPanel = document.getElementById('wishlist-panel');
const compareListContainer = document.getElementById('compare-list');

// Event Listeners
document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});
document.getElementById('cart-btn').addEventListener('click', () => {
    cartPanel.classList.toggle('translate-x-[110%]');
});
document.getElementById('close-cart').addEventListener('click', () => {
    cartPanel.classList.add('translate-x-[110%]');
});
document.getElementById('wishlist-btn').addEventListener('click', () => {
    wishlistPanel.classList.toggle('translate-x-[110%]');
});
document.getElementById('close-wishlist').addEventListener('click', () => {
    wishlistPanel.classList.add('translate-x-[110%]');
});
document.getElementById('compare-btn').addEventListener('click', () => {
    const modal = document.getElementById('compare-modal');
    modal.style.display = 'flex';
    renderCompareList();
});
document.getElementById('close-compare').addEventListener('click', () => {
    document.getElementById('compare-modal').style.display = 'none';
});
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Render functions
const renderProducts = (type, data) => {
    const container = type === 'products' ? productsGrid : prebuiltGrid;
    if (!container) return;

    container.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'pcard rounded-lg overflow-hidden shadow-lg transition-transform duration-300 relative';
        card.setAttribute('data-id', item.id);
        
        let badges = '';
        if (item.featured) {
            badges += '<span class="badge absolute top-2 right-2 text-xs px-2 py-1 rounded-full">مُميَز</span>';
        }
        if (item.bestSeller) {
            badges += '<span class="badge absolute top-2 right-12 text-xs px-2 py-1 rounded-full bg-red-500">الأكثر مبيعاً</span>';
        }

        const detailsHtml = type === 'prebuilt' ?
            `<div class="mt-2 text-xs text-text-muted">
                <p>CPU: ${item.specifications.CPU}</p>
                <p>GPU: ${item.specifications.GPU}</p>
                <p>RAM: ${item.specifications.RAM}</p>
                <p>Storage: ${item.specifications.Storage}</p>
            </div>` :
            `<div class="mt-2 text-xs text-text-muted">
                ${Object.entries(item.specifications).map(([key, value]) => `<p>${key}: ${value}</p>`).join('')}
            </div>`;

        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="w-full h-48 object-cover">
            ${badges}
            <div class="p-4 flex flex-col items-end">
                <h3 class="font-bold text-lg">${item.name}</h3>
                <div class="text-primary-blue text-xl font-semibold mt-1">${egCurrency(item.price)}</div>
                <div class="mt-2 text-sm text-text-muted flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.62-.921 1.92 0l1.24 3.823 4.025.293c.95.069 1.33 1.258.64 1.838l-3.087 2.247 1.18 3.896c.27.88-.748 1.583-1.528 1.053L10 14.54l-3.21 2.245c-.78.54-1.798-.173-1.528-1.053l1.18-3.896-3.087-2.247c-.69-.58-.31-1.769.64-1.838l4.025-.293 1.24-3.823z"></path></svg>
                    <span>${item.rating}</span>
                </div>
                ${detailsHtml}
                <div class="flex items-center gap-2 mt-4 self-stretch justify-end">
                    <button class="bg-primary-blue text-slate-900 font-semibold px-4 py-2 rounded-md hover:bg-secondary-blue transition-colors w-full add-to-cart-btn" data-id="${item.id}" data-price="${item.price}" data-name="${item.name}" data-img="${item.img}">
                        أضف للسلة
                    </button>
                    <button class="p-2 rounded-md border border-slate-700 hover:bg-slate-800 transition-colors add-to-wishlist-btn" data-id="${item.id}" aria-label="أضف لقائمة الرغبات">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                    </button>
                    <button class="p-2 rounded-md border border-slate-700 hover:bg-slate-800 transition-colors add-to-compare-btn" data-id="${item.id}" aria-label="أضف للمقارنة">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
};

const renderCart = () => {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';
    let total = 0;
    
    if (CART.length === 0) {
        cartItemsList.innerHTML = '<p class="text-center text-text-muted p-4">سلة التسوق فارغة</p>';
        checkoutBtn.disabled = true;
        emptyCartBtn.disabled = true;
    } else {
        checkoutBtn.disabled = false;
        emptyCartBtn.disabled = false;
        CART.forEach(item => {
            const li = document.createElement('li');
            li.className = 'flex justify-between items-center p-2 rounded-md hover:bg-slate-700/50 transition-colors';
            li.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="w-12 h-12 object-cover rounded-md">
                <div class="flex-1 mr-4">
                    <h4 class="font-semibold">${item.name}</h4>
                    <p class="text-sm text-text-muted">${egCurrency(item.price)}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button class="text-red-500 hover:text-red-400 remove-item-btn" data-id="${item.id}" aria-label="إزالة">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.035 21H7.965a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                    <span class="font-bold">${item.qty}</span>
                </div>
            `;
            cartItemsList.appendChild(li);
            total += item.price * item.qty;
        });
    }

    totalElement.textContent = egCurrency(total);
    cartCount.textContent = CART.reduce((sum, item) => sum + item.qty, 0);
    localStorage.setItem('jcart', JSON.stringify(CART));
};

const renderWishlist = () => {
    const wishlistItemsList = document.getElementById('wishlist-items');
    wishlistItemsList.innerHTML = '';
    
    if (WISHLIST.length === 0) {
        wishlistItemsList.innerHTML = '<p class="text-center text-text-muted p-4">قائمة الرغبات فارغة</p>';
    } else {
        WISHLIST.forEach(item => {
            const li = document.createElement('li');
            li.className = 'flex justify-between items-center p-2 rounded-md hover:bg-slate-700/50 transition-colors';
            li.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="w-12 h-12 object-cover rounded-md">
                <div class="flex-1 mr-4">
                    <h4 class="font-semibold">${item.name}</h4>
                    <p class="text-sm text-text-muted">${egCurrency(item.price)}</p>
                </div>
                <div class="flex items-center gap-2">
                    <button class="p-2 rounded-md border border-slate-700 hover:bg-slate-800 transition-colors move-to-cart-btn" data-id="${item.id}" aria-label="أضف للسلة">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" /></svg>
                    </button>
                    <button class="text-red-500 hover:text-red-400 remove-from-wishlist-btn" data-id="${item.id}" aria-label="إزالة">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.035 21H7.965a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                </div>
            `;
            wishlistItemsList.appendChild(li);
        });
    }

    wishlistCount.textContent = WISHLIST.length;
    localStorage.setItem('jwishlist', JSON.stringify(WISHLIST));
};

const renderCompareList = () => {
    compareListContainer.innerHTML = '';
    if (COMPARE_LIST.length === 0) {
        compareListContainer.innerHTML = '<p class="text-center col-span-2 text-text-muted p-4">قائمة المقارنة فارغة</p>';
    } else {
        COMPARE_LIST.forEach(item => {
            const card = document.createElement('div');
            card.className = 'pcard p-4 rounded-lg flex flex-col items-center relative';
            card.innerHTML = `
                <button class="absolute top-2 left-2 text-red-500 hover:text-red-400 remove-from-compare-btn" data-id="${item.id}" aria-label="إزالة من المقارنة">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
                <img src="${item.img}" alt="${item.name}" class="w-24 h-24 object-cover rounded-md mb-2">
                <h4 class="font-bold text-lg text-center">${item.name}</h4>
                <div class="text-primary-blue text-xl font-semibold mt-1">${egCurrency(item.price)}</div>
                <div class="mt-2 text-sm text-text-muted text-center">
                    ${Object.entries(item.specifications).map(([key, value]) => `<p>${key}: ${value}</p>`).join('')}
                </div>
            `;
            compareListContainer.appendChild(card);
        });
    }

    const compareCount = document.getElementById('compare-count');
    compareCount.textContent = COMPARE_LIST.length;
    localStorage.setItem('jcompare', JSON.stringify(COMPARE_LIST));
};

// Event handlers
const addToCart = (e) => {
    const btn = e.target.closest('.add-to-cart-btn');
    if (!btn) return;
    const id = btn.dataset.id;
    const price = parseFloat(btn.dataset.price);
    const name = btn.dataset.name;
    const img = btn.dataset.img;
    
    const existingItem = CART.find(item => item.id === id);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        CART.push({ id, name, price, img, qty: 1 });
    }
    renderCart();
};

const removeFromCart = (e) => {
    const btn = e.target.closest('.remove-item-btn');
    if (!btn) return;
    const id = btn.dataset.id;
    CART = CART.filter(item => item.id !== id);
    renderCart();
};

const addToWishlist = (e) => {
    const btn = e.target.closest('.add-to-wishlist-btn');
    if (!btn) return;
    const id = btn.dataset.id;
    const item = partsData[getCategoryById(id)].find(p => p.id === id) || prebuiltSystemsData.find(p => p.id === id);
    if (!WISHLIST.find(i => i.id === id)) {
        WISHLIST.push(item);
    }
    renderWishlist();
};

const removeFromWishlist = (e) => {
    const btn = e.target.closest('.remove-from-wishlist-btn');
    if (!btn) return;
    const id = btn.dataset.id;
    WISHLIST = WISHLIST.filter(item => item.id !== id);
    renderWishlist();
};

const addToCompare = (e) => {
    const btn = e.target.closest('.add-to-compare-btn');
    if (!btn) return;
    const id = btn.dataset.id;
    const item = partsData[getCategoryById(id)].find(p => p.id === id);
    if (!item) return;
    
    if (COMPARE_LIST.length >= 2) {
        alert('يمكنك مقارنة منتجين فقط في نفس الوقت.');
        return;
    }
    
    if (!COMPARE_LIST.find(i => i.id === id)) {
        COMPARE_LIST.push(item);
    }
    renderCompareList();
};

const removeFromCompare = (e) => {
    const btn = e.target.closest('.remove-from-compare-btn');
    if (!btn) return;
    const id = btn.dataset.id;
    COMPARE_LIST = COMPARE_LIST.filter(item => item.id !== id);
    renderCompareList();
};

const moveToCart = (e) => {
    const btn = e.target.closest('.move-to-cart-btn');
    if (!btn) return;
    const id = btn.dataset.id;
    const item = WISHLIST.find(i => i.id === id);
    if (item) {
        const existingCartItem = CART.find(i => i.id === id);
        if (existingCartItem) {
            existingCartItem.qty += 1;
        } else {
            CART.push({ ...item, qty: 1 });
        }
        WISHLIST = WISHLIST.filter(i => i.id !== id);
        renderCart();
        renderWishlist();
    }
};

const getCategoryById = (id) => {
    for (const category in partsData) {
        if (partsData[category].find(p => p.id === id)) {
            return category;
        }
    }
    return null;
};

// Event delegation
document.addEventListener('click', (e) => {
    if (e.target.closest('.add-to-cart-btn')) addToCart(e);
    if (e.target.closest('.remove-item-btn')) removeFromCart(e);
    if (e.target.closest('.add-to-wishlist-btn')) addToWishlist(e);
    if (e.target.closest('.remove-from-wishlist-btn')) removeFromWishlist(e);
    if (e.target.closest('.add-to-compare-btn')) addToCompare(e);
    if (e.target.closest('.remove-from-compare-btn')) removeFromCompare(e);
    if (e.target.closest('.move-to-cart-btn')) moveToCart(e);
});

// Parts Selector Logic
const renderParts = (category) => {
    if (!partsData[category]) return;
    
    partList.innerHTML = '';
    partsData[category].forEach(item => {
        const option = document.createElement('div');
        option.className = 'flex items-center gap-4 p-2 rounded-md hover:bg-slate-700/50 transition-colors cursor-pointer select-part-option';
        option.setAttribute('data-id', item.id);
        option.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="w-12 h-12 object-cover rounded-md">
            <div class="flex-1">
                <div class="font-semibold">${item.name}</div>
                <div class="text-sm text-text-muted">${egCurrency(item.price)}</div>
            </div>
            <div class="text-sm text-text-muted">
                ${Object.entries(item.specifications).map(([key, value]) => `<p>${key}: ${value}</p>`).join('')}
            </div>
        `;
        partList.appendChild(option);
    });
};

partsSelector.addEventListener('change', (e) => {
    const selectedCategory = e.target.value;
    renderParts(selectedCategory);
    partCompatibility.innerHTML = '';
});

// Cart and Wishlist Modals
const checkoutModal = document.getElementById('checkout-modal');
const openCheckoutModalBtn = document.getElementById('checkout-btn');
const closeCheckoutModalBtn = document.getElementById('close-checkout');
const checkoutForm = document.getElementById('checkout-form');
const checkoutTotalPrice = document.getElementById('checkout-total-price');
const checkoutItemsList = document.getElementById('checkout-items');
const clearCartBtn = document.getElementById('empty-cart-btn');
const exportOrdersBtn = document.getElementById('export-orders-btn');

openCheckoutModalBtn.addEventListener('click', () => {
    checkoutModal.style.display = 'flex';
    checkoutTotalPrice.textContent = totalElement.textContent;
    
    checkoutItemsList.innerHTML = '';
    if (CART.length > 0) {
        CART.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} × ${item.qty} - ${egCurrency(item.price * item.qty)}`;
            checkoutItemsList.appendChild(li);
        });
    } else {
        checkoutItemsList.innerHTML = '<p class="text-center text-text-muted">السلة فارغة</p>';
    }
});

closeCheckoutModalBtn.addEventListener('click', () => {
    checkoutModal.style.display = 'none';
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
    const csvContent = "data:text/csv;charset=utf-8," + "Order,Total\n" + CART.map(i => `${i.name},${i.price * i.qty}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
});

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('products', partsData.CPUs.filter(p => p.featured));
    renderProducts('prebuilt', prebuiltSystemsData);
    renderCart();
    renderWishlist();
    renderCompareList();
});
