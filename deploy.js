import { Client } from "basic-ftp";
import path from "path";

async function deploy() {
    const client = new Client();
    client.ftp.verbose = true;
    try {
        await client.access({
            host: "ftp.hhuong.site",
            user: "hhuong@hhuong.site",
            password: "hhuonghhuonghhuong",
            port: 21,
            secure: false
        });

        console.log("Connected to FTP server!");
        
        // Upload entire dist directory
        await client.uploadFromDir("dist", "/");
        
        console.log("Upload completed!");
    }
    catch(err) {
        console.error("Error occurred:", err);
    }
    finally {
        client.close();
    }
}

// Run deployment
deploy(); 