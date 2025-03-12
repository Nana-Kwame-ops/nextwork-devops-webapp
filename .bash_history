wget https://archive.apache.org/dist/maven/maven-3/3.5.2/binaries/apache-maven-3.5.2-bin.tar.gz
sudo tar -xzf apache-maven-3.5.2-bin.tar.gz -C /opt
echo "export PATH=/opt/apache-maven-3.5.2/bin:$PATH" >> ~/.bashrc
source ~/.bashrc
sudo dnf install -y java-1.8.0-amazon-corretto-devel
export JAVA_HOME=/usr/lib/jvm/java-1.8.0-amazon-corretto.x86_64
export PATH=/usr/lib/jvm/java-1.8.0-amazon-corretto.x86_64/jre/bin/:$PATH
mvn -v
java -version
mvn archetype:generate    -DgroupId=com.nextwork.app    -DartifactId=nextwork-web-project    -DarchetypeArtifactId=maven-archetype-webapp    -DinteractiveMode=false
pwd
ls
cd nextwork-web-project
ls
cd ~/nextwork-web-project/src/main/webapp
nano index.jsp
Ctrl + Shift + ~
cd ~/Desktop/DevOps
ls
pwd
ls
cd nextwork-web-project
ls
pwd
cd
cd ~/nextwork-web-project/src/main/webapp
nano index.jsp
nano --version
/usr/bin/nano index.jsp
ssh -i ~/Desktop/DevOps/nextwork-keypair.pem ec2-user@ec2-18-116-43-51.us-east-2.compute.amazonaws.com nano index.jsp
nano --version
/usr/bin/nano index.jsp
