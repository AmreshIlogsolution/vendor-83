<form method="post" action="{{route('invoice.store')}}" enctype="multipart/form-data"> 
    @csrf
<table>
    <tr>
        <td>
            Invoice type
            <select name="invoice_type">
               
                <option value="invoice">Storage</option>
                <option value="estimate">Transportation  Market Vehicle</option>
                <option value="quote">Transportation  Dedicated Vehicle</option>
                <option value="invoice">Transportation  Part Load</option>
                <option value="estimate">Admin  Utilities</option>
                <option value="quote">Admin  Stationary</option>
                <option value="invoice">Admin  Service</option>
                <option value="estimate">Technology  Service</option>
                <option value="quote">Technology  Hardware</option>
                <option value="quote">Technology Software</option>
            </select>
        </td>
        <td>
        Invoice FY<select name="invoice_fy">
            <option value="2024-2025">2024-2025</option>
        </select>
        </td>
        <td>
        Bill To<select name="bill_to">
            <option value="awl">Awl</option>
        </select>
        </td>
        <td>
        Bill From<select name="bill_From">
            <option value="infosix">Infosis</option>
        </select>
        </td>
        <td>
        Invoice Date<input type="date" name="invoiceDate">
       
        </td>
    </tr>
    <tr>
        <td>Invoice Number <input type="text" name="invoicesNumber">
        <td>Reference No. <input type="number" name="ref_number"></td>
        <td>Invoice Amount. <input type="number" name="invoice_amt"></td>
        <td>Bill .  <select name="bill_type">
            <option value="gst">GST</option>
            <option value="igst">IGST</option>
        </select>
    </tr>
    <tr>
        <td>Tax <select name="tax">
            <option value="5">5</option>
            <option value="12">12</option>
            <option value="18">18</option>
            <option value="28">28</option>
        </select> 
    </td>
    <td>Tax amount  <input type="text" name="text_amt">
    </td>
    </tr>
    <tr>
        <td>invoice image<input type="file" name="inv_image"></td>
        <td>Upload more document<input type="file" multiple name="more_document"></td>
    </tr>
    <tr>
        <td><textarea name="remarks"></textarea></td>
    </tr>
    <tr>
        <td>
            <input type="submit" name="draft" value="Save Draft">
            <input type="submit" name="draft" value="Save">
     
    </td>
    </tr>
</table>
</form>