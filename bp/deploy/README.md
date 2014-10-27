# README #

## Deploying to Heineken servers ##

### The Package ###
* Create a local folder ‘deploy’
+ Put all the files you want to upload, retaining their folder structure, under the root ‘deploy’
    * Eg /deploy/index.html 
    * /deploy/css/global.css
    * /deploy/img/animage.png
    * etc
- Only use the files that have been modified/added (ie not the whole website)
* Create a text file called ‘deployment_instructions.txt’. 
* Add details of the deploy, for example:

        Please replace the following files: 
	      index.html
	      css/global.css
        on the live environment: 
          www.add-domain-name.co.uk 
        with the files in the directory 'deploy' inside the zip file 
        'blind-pig-website_22-09-2014_v1.zip'

* Zip the whole lot up in a single zip file. Keep the ‘/deploy/’ folder and the ‘deployment_instructions.txt’ file separate (i.e. 'deployment_instructions' should be outside '/deploy/'.
+ The naming convention of the zip file should appear obvious from the above, ie              
    * {Website name} _ {date of deployment} _ {version}.zip
- Make sure the zip file name matches the reference in the ‘deployment_instructions.txt’ file

### Deploying ###
+ Using an FTP client, login using:
    * Host: deploymentftp.heineken.com
    * Username: hnkweb-acc\frazer.harte
    * Password: 
    * Port: 990
- Once logged in, you will have to physically add the remote site URL (deployment_acc-www.blindpigcider.co.uk) as you can’t navigate around at this level within FTP. 
* When you are in the remote site, upload the zip file into the root