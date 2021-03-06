app.controller('MainController', function($scope, $rootScope){
    if ($rootScope.result === undefined){
        $rootScope.menu = 'home';
        $rootScope.gender = '';
        $rootScope.hasil = '';
    }
    
    $scope.selectGender = function(gender){
        $rootScope.gender = gender;
        $rootScope.menu = 'kuis';
        $scope.pertanyaanKe = 1;
    };

    $scope.getProgress = function(pertanyaanKe, total){
        var progress = 0;
        progress = pertanyaanKe / total * 100;
        return {"width": progress + '%'};
    };

    $scope.pertanyaanKe = 1;

    $scope.pertanyaanTitles = [
        '',
        'Ketika Pergi Untuk Berenang',
        'Hiasan Meja', 
        'Ketika Mengerjakan Tugas', 
        'Tantangan Pribadi', 
        'Gambaran Pribadi', 
        'Impian', 
        'Yang Ingin Diketahui', 
        'Titik Terlemah', 
        'Rahasia Ketakutan', 
        'Ketika Merasa Terpojokkan', 
        'Perilaku Konsumsi', 
        'Bahasa Tubuh', 
        'Recharge Energi', 
        'Pola Berbicara', 
        'Didorong oleh', 
        'Pengendalian Diri', 
        'Hubungan Dengan Sesama', 
        'Keinginan', 
        'Yang Diutamakan', 
        'Lebih Suka Untuk'
    ];

    $scope.descriptions = {
        1: {
            1: 'Langsung menyebur ke kolam',
            2: 'Menganalisis kolam dahulu (kebersihan, suhu, keamanan)',
            3: 'Baru turun ke kolam, ketika yang lain sudah turun',
            4: 'Sibuk berinteraksi dengan orang'
        },
        2: {
            1: 'Dipenuhi foto dan kenangan',
            2: 'Menarik perhatian',
            3: 'Tersusun rapi',
            4: 'Penuh dengan penghargaan'
        },
        3: {
            1: 'Dilakukan bersama-sama',
            2: 'Dilakukan dengan benar',
            3: 'Dilakukan sekarang',
            4: 'Dilakukan dengan menyenangkan'
        },
        4: {
            1: 'Menyenangkan orang lain',
            2: 'Lebih tegas dan berani',
            3: 'lebih bersahabat',
            4: 'Perkataan sesuai fakta'
        },
        5: {
            1: 'Senang mengatur',
            2: 'Senang meyakinkan orang lain',
            3: 'Senang memdukung orang lain',
            4: 'Senang kualitas tinggi'
        },
        6: {
            1: 'Prestasi. Uang',
            2: 'Menjadi bintang',
            3: 'Keuntungan jangka panjang',
            4: 'Keamanan untuk keluarga'
        },
        7: {
            1: 'Apa',
            2: 'Siapa',
            3: 'Mengapa',
            4: 'Bagaimana'
        },
        8: {
            1: 'Kurang peka',
            2: 'Sering Lupa Janji',
            3: 'Lambat dalam  pekerjaan',
            4: 'Banyak khawatir'
        },
        9: {
            1: 'Takut kehilangan pengakuan umum',
            2: 'Takut akan perubahan',
            3: 'Takut dengan ketidak-ketahuan',
            4: 'Takut dimanfaatkan'
        },
        10: {
            1: 'Menyerang secara frontal', 
            2: 'Menyerang secara emosi', 
            3: 'Menjadi keras kepala', 
            4: 'Melawan secara teknis'

        },
        11: {
            1: 'Menyukai hal baru', 
            2: 'Bergantung pada penampilan', 
            3: 'Menyukai produk tradisional', 
            4: 'Memutuskan dengan sangat hati-hati'

        },
        12: {
            1: 'Condong ke depan', 
            2: 'Ekspresif', 
            3: 'Gestur yang lembut', 
            4: 'Kaku'
        },
        13: {
            1: 'Aktivitas fisik', 
            2: 'Berinteraksi', 
            3: 'Meditasi', 
            4: 'Menyendiri'

        },
        14: {
            1: 'Cepat', 
            2: 'Nada suara sangat bervariasi', 
            3: 'Lebih suka mendengarkan', 
            4: 'Nada suara monoton'

        },
        15: {
            1: 'Keinginan', 
            2: 'Perasaan', 
            3: 'Rasa percaya', 
            4: 'Intelektual'

        },
        16: {
            1: 'Damai, merasa puas, bahagia',
            2: 'Terbuka', 
            3: 'Tidak mudah marah', 
            4: 'Percaya diri'

        },
        17: {
            1: 'Ingin selalu menang', 
            2: 'Mempertimbangkan orang lain', 
            3: 'Mencari hal-hal yang menyenagkan', 
            4: 'Mau bekerjasama'

        },
        18: {
            1: 'Kekuasaan lebih', 
            2: 'Kesempatan baru', 
            3: 'Petunjuk yang jelas', 
            4: 'Menghindari Konflik'

        },
        19: {
            1: 'Pendidikan dan budaya', 
            2: 'Pencapaian dan penghargaan', 
            3: 'Keselamatan dan keamanan', 
            4: 'Hal-hal social'

        },
        20: {
            1: 'Memimpin', 
            2: 'Mengikuti', 
            3: 'Membujuk', 
            4: 'Menemukan fakta '

        },
    };

    $scope.d = 0;
    $scope.i = 0;
    $scope.s = 0;
    $scope.c = 0;
    

    $scope.kuncis = [
        [],
        ['', 'd', 'c', 's', 'i'], //1
        ['', 's', 'i', 'c', 'd'], //2
        ['', 's', 'c', 'd', 'i'], //3
        ['', 's', 'i', 'd', 'c'], //4
        ['', 'd', 's', 'c', 'i'], //5
        ['', 'd', 'i', 's', 'c'], //6
        ['', 'd', 'i', 'c', 's'], //7
        ['', 'd', 'i', 's', 'c'], //8
        ['', 'i', 's', 'd', 'd'], //9
        ['', 'd', 'i', 's', 'c'], //10
        ['', 'd', 'i', 's', 'c'], //11
        ['', 'd', 'i', 's', 'c'], //12
        ['', 'd', 'i', 's', 'c'], //13
        ['', 'd', 'i', 's', 'c'], //14
        ['', 'd', 'i', 's', 'c'], //15
        ['', 's', 'i', 'c', 'd'], //16
        ['', 'd', 'c', 'i', 's'], //17
        ['', 'd', 'i', 'c', 's'], //18
        ['', 'd', 'c', 's', 'i'], //19
        ['', 'd', 's', 'i', 'c'], //20
    ];

    // $scope.menu = 'detail';
    // $scope.gender = 'wanita';
    // $scope.hasil = 'd';

    function goToResult(){
        $rootScope.menu = 'hasil';
    }

    $scope.selengkapnya = function(){
        window.location = $rootScope.hasil+'-'+$rootScope.gender+'.html';
    };

    $scope.genderHome = function(hasil){
        $rootScope.menu = 'genderHome';
        $rootScope.hasil = hasil;
    };

    $scope.detailFromMenu = function(gender){
        window.location = $rootScope.hasil+'-'+gender+'.html';
    };

    function calculate(){
        if ($scope.d === $scope.i && $scope.d === $scope.s && $scope.d === $scope.c){
            $rootScope.hasil = 's';
        } else if ($scope.d > $scope.i && $scope.d > $scope.s && $scope.d > $scope.c) {
            $rootScope.hasil = 'd';
        } else if ($scope.i > $scope.d && $scope.i > $scope.s && $scope.i > $scope.c) {
            $rootScope.hasil = 'i';
        } else if ($scope.s > $scope.d && $scope.s > $scope.i && $scope.s > $scope.c) {
            $rootScope.hasil = 's';
        } else if ($scope.c > $scope.d && $scope.c > $scope.i && $scope.c > $scope.s) {
            $rootScope.hasil = 'c';
        } else {
            $rootScope.hasil  = 'i';
        }

        goToResult();
        // console.log($scope.hasil);
        // console.log('--------');
        // console.log($scope.d);
        // console.log($scope.i);
        // console.log($scope.s);
        // console.log($scope.c);
    }

    $scope.downloads = [
        'download1',
        'download2',
        'download3',
        'download4',
        'download5',
        'download6',
        'download7',
        'download8',
    ];

    $scope.nextQuestion = function(currentQuestion, answer){
        if (answer === 'd'){
            $scope.d += 1;
        }
        if (answer === 'i'){
            $scope.i += 1;
        }
        if (answer === 's'){
            $scope.s += 1;
        }
        if (answer === 'c'){
            $scope.c += 1;
        }

        if (currentQuestion === 20){
            calculate();
        } else {
            $scope.pertanyaanKe = currentQuestion + 1;
        }
    };

});