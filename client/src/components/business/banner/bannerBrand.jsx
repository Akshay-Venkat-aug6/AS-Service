import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Brand = () => {
  return (
    <div className="b-box p-5">
      <div className="b-title">
        <p className="font_36">Let numbers do the talking!</p>
        <span className="font_20">
          And let India’s largest brand in Business travel take care of your organisations travel needs!
        </span>
      </div>
      <div className="flex cards">
        <div>
          <Card>
            <CardContent>
              This impressive
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent>
              This impressive
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent>
              This impressive
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent>
              This impressive
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardContent>
              This impressive
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
};

export default Brand;