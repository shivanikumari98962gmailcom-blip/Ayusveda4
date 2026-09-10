# 📊 Google Sheets Setup Guide for Lead Tracking

Follow these 3 simple steps to automatically save every order into your **Google Sheet**:

---

## Step 1: Create a Google Sheet
1. Open [Google Sheets](https://sheets.new) and create a new spreadsheet.
2. In the first row (Header Row), add these column titles:
   | A | B | C | D | E | F |
   |---|---|---|---|---|---|
   | **Date & Time** | **Order ID** | **Customer Name** | **Phone Number** | **Delivery Address** | **Product** |

---

## Step 2: Add Google Apps Script
1. In your Google Sheet, click **Extensions** -> **Apps Script** from the top menu.
2. Delete any default code and **paste the following script**:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString(),
      data.order_id || "",
      data.name || "",
      "'" + (data.phone || ""), // Single quote keeps lead phone format formatted
      data.address || "",
      data.product || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({"result": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({"result": "error", "error": err.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (💾 icon) at the top.
4. Click **Deploy** -> **New deployment**.
5. Click the gear icon next to *Select type* -> choose **Web app**.
6. Set the following settings:
   - **Description**: `Ayushveda Lead Receiver`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone` *(Crucial so orders can post to your sheet)*
7. Click **Deploy**, authorize permissions if prompted, and **copy your Web App URL** (starts with `https://script.google.com/macros/s/...`).

---

## Step 3: Connect to your PHP Application
Open [api/process_order.php](file:///d:/ayushveda4/api/process_order.php) and paste your Web App URL into line 25:

```php
$googleSheetUrl = 'https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec';
```

Done! Every customer order will now automatically append a new row to your Google Sheet! 🚀
