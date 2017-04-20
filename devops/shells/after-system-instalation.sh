# create new 'vitalii' user
adduser vitalii

# add user to sudo group
gpasswd -a vitalii sudo

# switch to vitalii
su - vitalii

# configure faerwall
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 25/tcp
sudo ufw show added
sudo ufw enable

# configure time-zone
sudo dpkg-reconfigure tzdata

# install Java
sudo apt-get install -y default-jre

# Install Docker

sudo apt-get update
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
sudo apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main'
sudo apt-get update
sudo apt-get install -y docker-engine

# Executing the Docker Command Without Sudo
sudo usermod -aG docker vitalii

# Install Docker compose
sudo apt-get -y install python-pip
export LC_ALL=C
sudo pip install docker-compose

# Continue ... Need to install Jenkins worker