ansible-playbook -i host deploy.yml --extra-vars workspace=/var/jenkins_home/jobs/Gameoflife/jobs/Gameoflife-svn/jobs/GameOfLife_CD/workspace
ssh-keygen
cd 
cd .ssh/
ls -la
vi id_rsa.pub 
cat id_rsa.pub 
cd
cd /var/jenkins_home/jobs/Gameoflife/jobs/Gameoflife-svn/jobs/GameOfLife_CD/workspace
ls -la
ansible-playbook -i host deploy.yml --extra-vars workspace=/var/jenkins_home/jobs/Gameoflife/jobs/Gameoflife-svn/jobs/GameOfLife_CD/workspace
