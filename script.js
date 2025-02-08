const qcmData = `Question 2 - Quelle est la forme la plus simplifiée de l'adresse IPv6 suivante ? 2001:0000:0000:0700:0000:0000:0000:0002
A  2001:0:0:700 :: 2
B  2001::700::2
C  2001:0:0:700:0:0:0:2
D  2001:0:0:7::2
E  2001:0:0:0700::0002

Question 3 + - Quelles commandes permettent de vérifier si le paquet apache est installé?
A  rpm -q apache
B  rpm -Vf apache
C  rpm -i apache
D  rpm -u apache
E  rpm -qa | grep apache

Question 4 + - Quelles sous-commandes de la commande systemctl peuvent redémarrer un services?
A  try-restart
B  status
C  restart
D  reload-or-restart
E  enable
F  disable

Question 5 - Quelle commande permet de modifier la cible par défaut du systemd?
A  systemctl set-cible
B  systemctl set-default
C  systemd default
D  systemctl get-default
E  systemctl isolate

Question 6 - Comment est nommee la deuxieme partition du premier disque dur SATA sous Linux ?
A  /dev/sda0
B  /dev/sdb2
C  /dev/sda3
D  /dev/sda2

Question 7 + - On vient juste de télécharger le fichier vim-1.5-20-i386.deb. Quelle commande installera le paquet?
A  apt install vim-1.5-20-i386.deb
B  rpm -i vim-1.5-20-i386.deb
C  aptitude vim-1.5-20-i386.deb
D  apt install vim
E  dpkg-i vim-1.5-20-i386.deb

Question 8 - Indiquer dans quel fichier se trouve la ligne suivante : lpadmin :! : lpm : dave
A  /etc/gshadow
B  /bin/bash
C  /etc/passwd
D  /etc/group
E  /etc/shadow

Question 9 - Quelle valeur du paramètre OnCalendar permet de définir une exécution quotidienne à 5h du matin ?
A  OnCalendar=monthly 5:00
B  OnCalendar=daily 5:00
C  OnCalendar=05:00:00/1
D  OnCalendar =*-*-* 05:00:00/1
E  OnCalendar=5:00

Question 10 - Quelle commande Debian permet de supprimer tous les fichiers relatifs à un paquet nommé zip (ne garde aucun fichier)?
A  dpkg -ra zip
B  apt purge zip
C  apt autoremove zip
D  pkg -ua zip
E  apt remove zip

Question 11 - Lors de l'execution de useradd, quelle option permet de copier le contenu du répertoire /etc/skell dans le répertoire personnel de l'utilisateur?
A  -m
B  -k
C  -h
D  -p
E  -f

Question 12 + - Que peut être le premier champ du fichier /etc/fstab?
A  Le point de montage de la partition
B  L'UUID d'une partition
C  Le Label associé à une partition
D  Le nom donné par système à une partition
E  Le type du système de fichier

Question 13 - Quel fichier permet à l'administrateur de déterminer sur quel port fonctionne un service donné?
A  /etc/hosts
B  /etc/resolv.conf
C  /etc/services
D  /etc/interfaces
E  /etc/nsswitch

Question 14 - Quelle commande permet de cloner des disques ou des partitions?
A  btrfs-copy
B  clone
C  dd
D  dumpe2fs
E  xfs_copy

Question 15 - Quelle option de la commande usermod permet de modifier le shell par défaut d'un utilisateur donné ?
A  -S
B  -R
C  -d
D  -c
E  -s

Question 16 + - Sous Red Hat, quels outils permettent d'installer un paquet à partir d'un fichier local pré-compilé?
A  apt
B  dnf
C  rpm
D  yum
E  dpkg

Question 17 - A quel classe d'adresse appartie l'adresse IPv4 128.23.55.55?
A  Classe A
B  Classe D
C  Classe C
D  Classe B

Question 18 - Que représente le quatrième c d'une ligne dans le fichier /etc/fstab ?
A  Les options de montage
B  Le type de système de fichiers
C  Le nom de la partition
D  Le point de montage de la partition

Question 19 + - Quelles commandes pe d'afficher le nom d'une machine sous Linux
A  hostname
B  hostnamectl
C  gethostname
D  systemctl
E  ifconfig

Question 20 - Quelle sous-commande de la commande systemctl permet de redémarrer un service que si il est actif?
A  reload-or-restart
B  start
C  restart
D  reload
E  try-restart

Question 21 + - Quelles sont les syntaxes correctes pour exécuter une tâche tous les jours à 14h30 avec OnCalendar ?
A  OnCalendar=14:30:00
B  OnCalendar=weekly 14:30
C  OnCalendar=daily
D  OnCalendar=daily 14:30:00
E  OnCalendar=Mon .. Sun *-*-* 14:30
F  OnCalendar =*-*-* /1 14:30

Question 22 + - Dans quels répertoires se trouvent les fichiers de configuration des unités du systemed?
A  /etc/apt/sources
B  /usr/lib/systemd/sys- tem/
C  /home/lib/systemd
D  /etc/systemd/system/
E  /lib/systemd/system/

Question 23 - Quelle commande permet de créer une nouvelle partition swap?
A  fdisk
B  swapon
C  mkfs
D  mkfs.swap
E  mount

Question 24 - Quelle commande permer o ifier le nombre de jours d'avertissement avant qu'un changement de mot de passe ne soit nécessaire?
A  chage -M
B  chage -a
C  chage -W
D  chage -l
E  chage -m

Question 25 - Quelle commande permet de modifier le login (nom de connexion) d'un utilisateur donné ?
A  usermod -p
B  useradd -n
C  usermod -g
D  usermod -1
E  usermod -n

Question 26 - Indiquer dans quel fichier se trouve la ligne suivante : nobody : * : 16535 : 0 : 99999 : 7 :::
A  /etc/shadow
B  /etc/passwd
C  /etc/group
D  /bin/bash
E  /etc/gshadow

Question 27 - Quelle commande permet d'afficher tous les types d'unités gérées par systemd?
A  systemctl list-types
B  systemctl list-units 
C  systemctl list-units-files
D  systemctl -t help
E  systemctl list-jobs

Question 28 - Quelle est la deuxième étape lors de Pinstallation d'un logiciel à partir des sources sous Linux?
A  Installer les dépendances.
B  Configurer le logiciel.
C  Télécharger le code source.
D  Décompresser l'archive
E  Exécuter la commande make.

Question 29 - Quel fichier de configuration permet de donner l'ordre d'exécution des mécanismes de ré- solution de noms des machines hôtes en adresse IP et contient la ligne suivante (hosts : files dns ldap) ?
A  /etc/nsswitch
B  /etc/interfaces
C  /etc/services
D  /etc/resolv.conf
E  /etc/sysconfig/hosts
F  /etc/hosts

Question 30 - Que contient le répertoire /dev ?
A  Les fichiers de périphérique
B  Les fichiers temporaires du système
C  Les fichiers de configurations du noyau
D  Les fichiers exécutables du système
E  Les bibliothèques de developpement

Question 31 - Quel est l'outil utilisé pour redimensionner un système de fichiers XFS ?
A  xfs_resize
B  fdisk expand
C  xfs_extend
D  xfs_growfs
E  xfs_admin

Question 32 . Que fait l'option nosuid dans le fichier /etc/fstab ?
A  Active le mode de récupération du système
B  Empêche l'exécution avec les privilèges du propriétaire
C  Empêche les utilisateurs ordinaires de monter la partition
D  Empêche l'exécution de fichiers binaires

Question 33 - Sur une machine Debian ancienne, quel est le nom du service par défaut relatif à le gestion du réseau?
A  systemd-networkd
B  network
C  NetworkManager
D  networkd
E  networking

Question 34 - Quel est le masque de réseau par défaut de la classe C
A  255.255.255.0
B  255.0.0.0
C  255.255.0.0
D  255.255.255.255

Question 35 + - Quels deux types d'unité systemed permettent ensemble de planifier l'exécution de tâches?
A  service
B  mount
C  target
D  socket
E  device
F  timer

Question 36 - Comment définir un timer qui s'exécute toutes les heures à partir de 10h ?
A  OnCalendar =*-*-* 10:00:00
B  OnCalendar=10:00:00/1:00
C  OnCalendar=10:00:00/1
D  OnCalendar=hourly 12:00

Question 37 - Quelle commande permet de changer l'adresse MAC de l'interface Ethernet eth0?
A  ifconfig eth0 up hw 70:4d:7b:70:d2:3e
B  ifconfig eth0 mac-addr 70:4d:7b:70:d2:3e
C  ifconfig eth0 promise 70:4d:7b:70:d2:3e
D  ifconfig eth0 hw ether 70:4d:7b:70:d2:3e

Question 38 + - Quelles informations parmi les suivantes sont affichées en exécutant la commande ifconfig ethO?
A  Le nombre de paquet transmis en erreur.
B  L'adresse physique MAC de l'interface eth0.
C  Les noms de machines associes a l'interface eth0.
D  La table de routage de la machine.
E  Les noms de programmes qui utilisent eth0.
F  L'adresse IP affectée à l'interface ethO.

Question 39 - Quelle sous-commande de la commande systemctl permet d'empêcher complètement le démarrage d'un service?
A  disable
B  mask
C  restart
D  enable
E  reload

Question 40 - Quel est le nom conventionnel du premier disque NVMe sous Linux ?
A  /dev/nvme0
B  /dev/sda
C  /dev/nvme0n1
D  /dev/nvme0n1p1
E  /dev/nvme1n1

Question 41 + - Parmi les informations suivantes, lesquelles sont nécessaires pour accéder à Internet via des URL dans le cas d'une configuration manuelle
A  Le masque de réseau.
B  Adresse IP Serveur DNS.
C  L'adresse IP du serveur DHCP.
D  Le nom du serveur web.
E  L'adresse d'une passerelle.
F  Adresse IP de la machine.

Question 42 + - Quels sont les lignes qui peuvent être dans le fichier /etc/resolv.conf?
A  nameserver 2002:47:47 :: 1
B  domain fsm.rnu.tn
C  127.0.0.1 localhost
D  hosts : files dns Idap
E  nameserver 212.27.32.5
F  https 443/tcp

Question 43 + - Quelles directives dans une unité timer peuvent définir le moment où la tâche doit être exécutée pour la première fois ?
A  OnBootSec
B  OnCalendar
C  OnUnitActiveSec
D  OnFirstExec
E  OnExecSec
F  UnitFirstExecution

Question 44 - Quelle commande permet de lister toutes les tâches en exécution en arrière plan?
A  systemctl list-unit-files
B  systemctl list-sockets
C  systemctl get-default
D  systemctl list-jobs
E  systemctl list-units

Question 45 - Quelle option de la commande useradd permet de fixer un UID spécifique à un utilisateur lors de sa création?
A  -u
B  -i
C  -id
D  -h
E  -uid

Question 46 - Quel masque de sous-réseau est associé au préfixe CIDR /22?
A  255.255.254.0
B  255.255.252.0
C  255.255.192.0
D  255.255.255.0
E  255.255.128.0

Question 47 - Comment vérifier l'état d'un service systemd nommé httpd?
A  systemctl status httpd
B  ps -s httpd
C  service status httpd
D  systemd status httpd
E  ps aux | grep httpd

Question 48 + - Sous Debian, quelles commandes permettent de désinstaller un paquet nommé demo?
A  dpkg -r demo
B  apt uninstall demo
C  dpkg -u demo
D  dnf remove demo
E  apt remove demo

Question 49 - Quelle commande permet de supprimer le compte et les données d'un utilisateur momo même s'il est connecté?
A  userdel -r momo
B  removeuser -a momo
C  userdel -a momo
D  userdel -rf momo
E  userdel -f momo

Question 50 - Quelle commande permet de lister tous les groupes de paquets disponibles ?
A  dnf grouplist
B  dnf search groups
C  dnf show groups
D  dnf module list
E  dnf list groups

Question 51 - Quelle commande permet de consulter le journal systemd ?
A  logread
B  syslog
C  dmesg
D  journalctl
E  systemdctl list-logs

Question 52 + - Lesquelles des commandes suivantes bloquent la connexion par mot de passe d'un utilisateur mais n'empêchent pas les autres formes de connexion ?
A  passwd -u
B  userlock
C  usermod -L
D  passwd -l
E  userdel -r

Question 53 + - Parmi les fichiers suivants lesquels peuvent être modifiés par la commande groupadd?
A  /etc/gshadow
B  /etc/suoders
C  /etc/passwd
D  /etc/group
E  /etc/shadow
F  /etc/login.defs

Question 54 Quelle commande permet d'afficher seulement les informations d'adressage IPv6 actuellement utilisées par une machine ?
A  ip addr
B  ip6 addr
C  ip -6 addr
D  ipconfig6
E  ip6addr

Question 55 - Quel fichier cible correspond aux mode d'éxécution multi-utilisateurs non graphique?
A  multi-user.target
B  emergency.target
C  graphical.target
D  rescue.target
E  nographical.target

Question 56 Sur une machine Red Hat,quel paramètre du fichier /etc/sysconfig/networkscripts/ifcfg-enp0s3 permet d'activer une interface réseau lors du démarrage de la machine?
A  BOOTPROTO=dhcp
B  ONBOOT=yes
C  BOOTTP=yes
D  IPADDR=192.168.2.255
E  DHCP=ON

Question 57 - Quelle option de la commande dumpe2fs affiche les blocs qui sont marqués défectueux?
A  -d
B  -i
C  -l
D  -b
E  -v

Question 58 - Quelle option de la commande dnf permet d'installer un paquet ?
A  getinstall
B  configure
C  make install
D  update
E  install

Question 59 - Quelle option de la commande if-config permet à une carte réseau d'accepter tous les paquets même ceux qui ne lui sont pas destinés ?
A  tcpdump
B  -allmulti
C  promisc
D  -promisc
E  textadd address 0.0.0.0

Question 60 + - Quelles commandes permettent d'affecter une adresse IP à une interface?
A  systemctl
B  ifconfig
C  route 
D  ip

Question 61 - Quelle valeur du paramètre OnCalendar permet l'exécution de tâche le premier samedi de chaque mois à 8h?
A  sat monthly 08:00:00
B  Sat/4 *-*-* 8:00:00
C  day=Sat *-*-* /4 08:00:00
D  weekly 08:00
E  Sat *-*- 1 .. 7 8:00:00`;

const correctAnswers = {
    "Question 2": "A",
    "Question 3": "A,E",
    "Question 4": "A,C,D",
    "Question 5": "B",
    "Question 6": "D",
    "Question 7": "A,E",
    "Question 8": "A",
    "Question 9": "D",
    "Question 10": "B",
    "Question 11": "A",
    "Question 12": "B,C,D",
    "Question 13": "C",
    "Question 14": "C",
    "Question 15": "E",
    "Question 16": "B,C,D",
    "Question 17": "D",
    "Question 18": "A",
    "Question 19": "A,B",
    "Question 20": "E",
    "Question 21": "D,E",
    "Question 22": "B,D,E",
    "Question 23": "A",
    "Question 24": "C",
    "Question 25": "E",
    "Question 26": "A",
    "Question 27": "A",
    "Question 28": "B",
    "Question 29": "A",
    "Question 30": "A",
    "Question 31": "D",
    "Question 32": "B",
    "Question 33": "F",
    "Question 34": "A",
    "Question 35": "A,F",
    "Question 36": "C",
    "Question 37": "D",
    "Question 38": "A,B,F",
    "Question 39": "B",
    "Question 40": "C",
    "Question 41": "B,E,F",
    "Question 42": "A,B,E",
    "Question 43": "A,B,C",
    "Question 44": "D",
    "Question 45": "A",
    "Question 46": "A",
    "Question 47": "A",
    "Question 48": "A,E",
    "Question 49": "A",
    "Question 50": "A",
    "Question 51": "D",
    "Question 52": "C,D",
    "Question 53": "A,D",
    "Question 54": "C",
    "Question 55": "A",
    "Question 56": "B",
    "Question 57": "C",
    "Question 58": "C",
    "Question 59": "C",
    "Question 60": "B,D",
    "Question 61": "E"
};

const questions = qcmData.split('\n\n');
const qcmContainer = document.getElementById('qcm');

questions.forEach((q) => {
    let lines = q.split('\n');
    let questionText = lines.shift();
    let questionNumber = questionText.match(/Question (\d+)/)[1];
    
    let questionDiv = document.createElement('div');
    questionDiv.className = 'question-box';
    questionDiv.dataset.questionNumber = questionNumber;
    
    let questionHeader = document.createElement('div');
    questionHeader.className = 'question-number';
    questionHeader.textContent = `Question ${questionNumber}`;
    questionDiv.appendChild(questionHeader);
    
    let p = document.createElement('p');
    p.textContent = questionText.split(' - ')[1];
    questionDiv.appendChild(p);
    
    let ul = document.createElement('div');
    
// Dans la boucle de création des réponses
lines.forEach(answer => {
    let answerDiv = document.createElement('div');
    answerDiv.className = 'answer-item';
    
    let inputType = correctAnswers[`Question ${questionNumber}`].includes(',') 
                  ? 'checkbox' 
                  : 'radio';
                  
    let input = document.createElement('input');
    input.type = inputType;
    input.name = `question${questionNumber}`;
    input.value = answer.charAt(0);
    input.id = `q${questionNumber}_${answer.charAt(0)}`; // Ajout d'un ID unique
    
    let label = document.createElement('label');
    label.htmlFor = input.id; // Liaison explicite
    label.style.cursor = 'pointer';
    label.style.width = '100%';
    label.style.display = 'flex';
    label.style.alignItems = 'center';
    
    let optionSpan = document.createElement('span');
    optionSpan.className = 'option-label';
    optionSpan.textContent = answer.charAt(0);
    
    label.appendChild(optionSpan);
    label.appendChild(document.createTextNode(answer.substring(3)));
    
    answerDiv.appendChild(input);
    answerDiv.appendChild(label);
    ul.appendChild(answerDiv);
});
    
    questionDiv.appendChild(ul);
    qcmContainer.appendChild(questionDiv);
});

function calculateScore() {
    let score = 0;
    let total = Object.keys(correctAnswers).length;
    
    document.querySelectorAll('.question-box').forEach(questionDiv => {
        let questionNumber = questionDiv.dataset.questionNumber;
        let correctAnswer = correctAnswers[`Question ${questionNumber}`];
        let selectedOptions = Array.from(questionDiv.querySelectorAll('input:checked'))
                                   .map(input => input.value)
                                   .sort()
                                   .join(',');
        
        // Reset highlighting
        questionDiv.classList.remove('correct', 'incorrect');
        
        if (selectedOptions === correctAnswer) {
            score++;
            questionDiv.classList.add('correct');
        } else if (selectedOptions !== '') {
            questionDiv.classList.add('incorrect');
        }
    });
    
    document.getElementById('result').textContent = `Score: ${score}/${total} (${Math.round((score/total)*100)}%)`;
    document.getElementById('result').className = `result ${score === total ? 'correct' : 'incorrect'}`;
}
function resetExam() {
    // Réinitialiser les sélections
    document.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => {
        input.checked = false;
    });
    
    // Réinitialiser le style des questions
    document.querySelectorAll('.question-box').forEach(questionDiv => {
        questionDiv.classList.remove('correct', 'incorrect');
    });
    
    // Réinitialiser le résultat
    const resultElement = document.getElementById('result');
    resultElement.textContent = '';
    resultElement.className = 'result';
}

function scrollToBottom() {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
    });
}

// Afficher/cacher le bouton selon le scroll
window.addEventListener('scroll', () => {
    const scrollBtn = document.querySelector('.floating-scroll-btn');
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - 100;

    if (scrollPosition < pageHeight) {
        scrollBtn.style.display = 'flex';
    } else {
        scrollBtn.style.display = 'none';
    }
});

// Initialiser la visibilité du bouton
document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.querySelector('.floating-scroll-btn');
    scrollBtn.style.display = window.innerHeight >= document.documentElement.scrollHeight ? 'none' : 'flex';
});
